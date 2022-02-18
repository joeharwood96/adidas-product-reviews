import React from 'react'
import { TailSpin } from  'react-loader-spinner'
import logo from '../../assets/Adidas_Logo.svg'
import "./styles.scss"

export default function Loader() {

    return (
        <div className="loader">
            <div className="loader-center">
                <img src={logo} alt="Adidas logo" className="loader-logo" />
                <TailSpin
                    height="100"
                    width="100"
                    color='black'
                    ariaLabel='loading'
                />
            </div>
        </div>
    )
}