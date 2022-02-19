import React, { useState } from 'react'
import './styles.scss'
import { HiSearch } from 'react-icons/hi'
import { SearchContext } from '../../App'

export default function Search() {

    return (
        <SearchContext.Consumer>
            {
                searchContext => {
                   return <div className="search-wrapper">
                        <input 
                            type="text" 
                            className="search-input" 
                            placeholder="Search"
                            value={searchContext?.searchString}
                            onChange={searchContext?.onChange}
                        />
                        <button className="search-button">
                            <HiSearch size="2rem" className="search-icon"/>
                        </button>
                    </div>
                }
            }
        </SearchContext.Consumer>
    )
}