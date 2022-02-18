import React, { useState } from 'react'
import './styles.scss'

import { HiSearch } from 'react-icons/hi'

export default function Search() {
    const [searchString, setSearchString] = useState('');

    const handleSubmit = () => {
        if(searchString) {
            setSearchString('');
        }
    }

    const handleChange = (e: { target: { value: string } }) => {
        setSearchString(e.target.value);
    }

    return (
        <div className="search-wrapper">
            <input 
                type="text" 
                className="search-input" 
                placeholder="Search"
                onChange={handleChange}
            />
            <button className="search-button" onClick={handleSubmit}>
                <HiSearch size="2rem" className="search-icon"/>
            </button>
        </div>
    )
}