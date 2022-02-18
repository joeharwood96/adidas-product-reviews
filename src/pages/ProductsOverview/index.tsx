import React from 'react'
import './styles.scss'
import { useProductsQuery } from '../../services/productApi' 

// Components
import Loader from '../../components/Loader'
import ProductCard from '../../components/ProductCard'

export default function ProductOverview() {
    const { data, error, isLoading, isSuccess } = useProductsQuery()

    return (
        <div className="product-overview">
            { isLoading && <Loader />}
            { error && <h2>Something went wrong...</h2>}
            { isSuccess && data?.map((product, index) => <ProductCard key={product.id + index} product={product} />)}
        </div>
    )
}