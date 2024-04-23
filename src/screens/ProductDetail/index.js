import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import './ProductDetail.css';
import { formatMoney } from "../../utils/helpers";
import { useProducts } from "../../hooks";

const ProductDetail = () => {
    const { id } = useParams();
    const { getProductsDescription, getProductsDetail, isLoading, productDescription, productDetail } = useProducts();
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');

    useEffect(() => {
        if (id) {
            getProductsDescription(id);
            getProductsDetail(id)
        }
    }, [id]);

    useEffect(() => {
        if(productDescription?.plain_text){
            setDescription(productDescription?.plain_text ?? '');
        }
        if(productDetail?.thumbnail){

            setThumbnail(productDetail?.thumbnail);
        }
    }, [productDescription, productDetail])

    return (
        <div>
            <SearchBar />
            {isLoading ?
                <div>
                    <CircularProgress />
                </div>
                :
                (isLoading == false && productDetail) ?
                    <div className="container-app">
                        <div className="product-detail-container">

                            <div className="product-detail-description">
                                <div className="centerProduct">
                                    {thumbnail !== '' ? <img className='product-image' src={thumbnail} /> : null}
                                </div>

                                <Typography fontSize={18} fontWeight='bold' marginTop={10}>
                                    Descripción del producto
                                </Typography>


                                <Typography textAlign={'justify'} color={'#424242'} marginTop={5}>
                                    {description}
                                </Typography>
                            </div>

                            <div className="product-detail-price">
                                <Typography fontSize={12}>{`${productDetail?.condition ?? ''} - ${productDetail?.initial_quantity ?? '0'} vendidos`}</Typography>
                                <Typography fontWeight={'bold'} fontSize={18}>{productDetail?.title !== undefined ? productDetail?.title : ''}</Typography>

                                <Typography marginTop={2} fontWeight={'bold'} marginBottom={5} fontSize={26}>{formatMoney(productDetail?.price !== undefined ? productDetail?.price : 0)}</Typography>

                                <Button variant="contained" fullWidth>Comprar</Button>
                            </div>
                        </div>
                    </div>
                    : null}
        </div>
    )

}
export default (ProductDetail);