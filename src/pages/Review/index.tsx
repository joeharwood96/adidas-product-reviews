import React from 'react'
import './styles.scss'
import { useParams } from 'react-router-dom'
import { useProductQuery } from '../../services/productApi' 

// Components
import Loader from '../../components/Loader'
import Reviews from '../../components/Reviews'

export default function Review() {
    const { id } = useParams();
    const { data, error, isLoading, isSuccess } = useProductQuery(id || '')
    return  (
        <div className="review-container">
            { isLoading && <Loader />}
            { error && <h2>Something went wrong</h2>}
            { isSuccess && data &&
                <div className="review-product">
                    <img src={data.imgUrl} alt="product image" className="review-product-img" />
                    <div className="review-product-info">
                        <h2 className="review-product-info-name">{data.name}</h2>
                        <h2>{data.currency} {data.price}</h2>
                        <p>{data.description}</p>
                    </div>
                </div>
            }
            <Reviews />
        </div>
    )
}