import React from "react";
import { Typography } from '@mui/material';
import shipping from '../../Assets/ic_shipping.png';
import { formatMoney } from "../../utils/helpers";

const Item = ({ GotoDetail, item }) => {


    return (
        <div className='items' onClick={() => GotoDetail(item.id)}>
            <img className='imgItems' src={item.thumbnail} />
            <div className='itemsInfo'>
                <div className='itemPrice'>
                    <Typography>{formatMoney(item.price)}</Typography>
                    {item.shipping.free_shipping ?
                        <img className='imgShipping' src={shipping} />
                        : null}
                </div>
                <Typography>{item.title}</Typography>
            </div>
            <div className='itemRegion'>
                <Typography>{item.seller.nickname}</Typography>
            </div>
        </div>
    )
}

export default Item;