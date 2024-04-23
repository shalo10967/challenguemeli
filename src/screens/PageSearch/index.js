import React, { useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import SearchList from "../../components/SearchList";
import { useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useProducts } from "../../hooks";

const PageSearch = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');
    const { getProducts, isLoading, product } = useProducts();


    useEffect(() => {
        if (query) {
            getProducts(query)
        }
    }, [query]);

    const callToViewDetail = (id) => {
        window.location.href = `/items/${id}`;
    }

    return (
        <div>
            <SearchBar queryProps={query} />
            {isLoading ?
                <div>
                    <CircularProgress />
                </div>
                :
                <div className='container-app'>
                    <SearchList data={product.results ?? []} CallToViewDetail={(id) => callToViewDetail(id)} />
                </div>
            }
        </div>
    )

}
export default PageSearch;