import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { productBaseUrl } from '../constants'
import { Product } from '../models/product.model'

export const productApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: productBaseUrl }),
    endpoints: (builder) => ({ 
        products: builder.query<Product[], void>({
            query: () => '/product'
        })
    })
})

export const { useProductsQuery } = productApi