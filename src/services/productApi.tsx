import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { productBaseUrl, reviewBaseUrl } from '../constants'
import { Product } from '../models/product.model'
import { Review } from '../models/review.model'

const proxyURL = "http://localhost:8080/";

export const productApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: proxyURL + productBaseUrl,
    }),
    endpoints: (builder) => ({ 
        products: builder.query<Product[], void>({
            query: () => '/product'
        }),
        product: builder.query<Product, string>({
            query: (id) => `/product/${id}`
        }),
        reviews: builder.query<Review[], string>({
            query: (id) => ({
                url: `${proxyURL + reviewBaseUrl}/reviews/${id}`
            })
        }),
        addReview: builder.mutation<void, {id: string, review: Review}>({
            query: ({id, review}) => ({
                url: `${proxyURL + reviewBaseUrl}/reviews/${id}`,
                method: 'POST',
                body: review
            })
        })
    })
})

export const useAddReview = async (id: string, review: Review) => {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(review)
    };

    try { 
        const result = await fetch(`${reviewBaseUrl}/reviews/${id}`, requestOptions)
        return result.json();
    } catch (err) {
        return err
    } 
}

export const { useProductsQuery, useProductQuery, useReviewsQuery, useAddReviewMutation } = productApi