import React from 'react'
import './styles.scss'
import { useNavigate } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi'

import logo from '../../assets/Adidas_Logo.svg'
import Search from '../Search'

export default function Header() {
    const navigate = useNavigate()
    const pathname = window.location.pathname
    const page = pathname.split('/') 

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className="header">
            <img src={logo} alt="Adidas logo" className="header-logo" />
            {
                page[1] === 'review' ? 
                <button className="header-back" onClick={handleClick}>
                    <HiArrowNarrowLeft />
                    <span className="header-back-text">back</span>
                </button>
                :
                <Search />
            }
        </div>
    )
}