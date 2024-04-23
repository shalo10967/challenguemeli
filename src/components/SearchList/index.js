import React from 'react';
import Item from './Item';

import './SearchList.css';

const SearchList = (props) => {
    const {CallToViewDetail, data} = props;
    return (
        <div className="searchList">
            {data.map((item, index) => (
                <Item GotoDetail={(id) => CallToViewDetail(id)} key={index} item={item}/>
            )
            )}
        </div>
    )
}
export default SearchList;