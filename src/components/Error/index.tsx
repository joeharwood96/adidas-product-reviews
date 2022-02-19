import React from 'react'
import './styles.scss'

import logo from '../../assets/Adidas_Logo.svg'

export default function Error() {

    return (
        <div className="error">
            <div className="error-center">
                <img src={logo} alt="Adidas logo" className="loader-logo" />
                <h2>Something went wrong, please try again later.</h2>
            </div>
        </div>
    )
}