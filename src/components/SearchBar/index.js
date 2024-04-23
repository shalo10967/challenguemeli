import { SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

import './SearchBar.css';

import meliLogo from '../../Assets/Logo_ML.png';

const SearchBar = (props) => {
    const { queryProps } = props;
    const [query, setQuery] = useState(queryProps);

    const handleSearch = () => {
        if (query.trim('')) {
            window.location.href = `/search?query=${encodeURIComponent(query)}`;
        }
    };

    const handleChange = (e) => {
        setQuery(e.target.value)
    };

    return (
        <div className="searchBar">
            <img src={meliLogo} />
            <div className='inputs'>
                <TextField
                    value={query}
                    id='standard-basic'
                    label={'Nunca dejes de buscar'}
                    variant='filled'
                    InputProps={{
                        sx: {
                            borderRadius: 2,
                            height: 50,
                            backgroundColor: '#FFFFFF',

                        },
                        style: {
                            backgroundColor: '#FFFFFF',
                        }
                    }}
                    fullWidth
                    onChange={handleChange} />
                <IconButton color='default' onClick={handleSearch} size='small'> <SearchOutlined /></IconButton>
            </div>
        </div>
    )
}
export default SearchBar;