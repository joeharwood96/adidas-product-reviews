import React from 'react'
import './styles.scss'
import { useParams } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi'

import logo from '../../assets/Adidas_Logo.svg'
import Search from '../Search'

export default function Header() {
    const params = useParams()

    return (
        <div className="header">
            <img src={logo} alt="Adidas logo" className="header-logo" />
            {
                params && params.id ? 
                <button className="header-back">
                    <HiArrowNarrowLeft />
                    <span className="header-back-text">back</span>
                </button>
                :
                <Search />
            }
        </div>
    )
}