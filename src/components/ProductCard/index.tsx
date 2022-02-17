import React from 'react';
import { Product } from '../../models/product.model';
import './styles.scss'

export default function ProductCard({ product }: { product: Product }) {

    return (
        <a className="product-card" href={`/review/${product.id}`}>
            <div>
                <img className="product-card-img" src={product.imgUrl} alt="product image" />
                <span className="product-card-price">{product.currency} {product.price}</span>
            </div>
            <h3 className="product-card-name">{product.name}</h3>
            <p className="product-card-description">{product.description}</p>
        </a>
    )
}