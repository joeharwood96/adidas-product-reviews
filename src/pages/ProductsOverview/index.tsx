import React from 'react'
import './styles.scss'
import { useProductsQuery } from '../../services/productApi' 
import { SearchContext } from '../../App'
import { Product } from '../../models/product.model'

// Components
import Loader from '../../components/Loader'
import ProductCard from '../../components/ProductCard'
import Error from '../../components/Error'

export default function ProductOverview() {
    const { data, error, isLoading, isSuccess } = useProductsQuery()
    
    const filterData = (data: Product[] | undefined, searchString: string | undefined) => {
        if(!data || !searchString) return data
        const filter = data.filter(product => {
            const lowerCaseSearchString = searchString.toLowerCase()
            const price = product.price.toString().includes(lowerCaseSearchString)
            const name = product.name.toLowerCase().includes(lowerCaseSearchString)
            const description = product.description.toLowerCase().includes(lowerCaseSearchString)
            
            return price || name || description
        })

        return filter
    }

    return (
        <div className="product-overview">
            { isLoading && <Loader />}
            { error && <Error />}
            <SearchContext.Consumer>
                { 
                    searchContext => {
                        const searchData = filterData(data, searchContext?.searchString)
                        return (
                            <div className="product-overview-grid">
                                { isSuccess && searchData?.map((product, index) => <ProductCard key={product.id + index} product={product} />)}
                            </div>
                        )
                    }
                }
            </SearchContext.Consumer>
            
        </div>
    )
}