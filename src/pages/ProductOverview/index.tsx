import React from 'react'
import { useProductsQuery } from '../../services/product' 

export default function ProductOverview() {
    const { data, error, isLoading, isSuccess } = useProductsQuery()

    return (
        <div>
            Product Overview
            { isLoading && <h2>Loading...</h2>}
            { error && <h2>Something went wrong...</h2>}
            { isSuccess && 
                <div>
                    {data?.map(product => <p>{product.name}</p>)}
                </div>
            }
        </div>
    )
}