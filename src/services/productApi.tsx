import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { productBaseUrl, reviewBaseUrl } from '../constants'
import { Product } from '../models/product.model'
import { Review } from '../models/review.model'

export const productApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: productBaseUrl }),
    endpoints: (builder) => ({ 
        products: builder.query<Product[], void>({
            query: () => '/product'
        }),
        product: builder.query<Product, string>({
            query: (id) => `/product/${id}`
        }),
        reviews: builder.query<Review[], string>({
            query: (id) => ({
                url: `${reviewBaseUrl}/reviews/${id}`
            })
        })
    })
})

export const { useProductsQuery, useProductQuery, useReviewsQuery } = productApi