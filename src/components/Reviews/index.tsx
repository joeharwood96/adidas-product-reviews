import React, { useState } from 'react'
import './styles.scss'
import { useParams } from 'react-router-dom'
import { useReviewsQuery } from '../../services/productApi'
import { Review } from '../../models/review.model'

// Components
import Loader from '../Loader'
import AddReviewModal from '../AddReviewModal'

export default function Reviews() {
    const { id } = useParams();
    const [showAddReview, setShowAddReview] = useState(false);
    const { data, error, isLoading, isSuccess } = useReviewsQuery(id || '')
    const roundHalf = (num: number) => {
        return Math.round(num*2)/2;
    }

    return (
        <div className="reviews">
            <h2 className="reviews-title">Ratings and Reviews</h2>
            { isLoading && <Loader />}
            { error && <h2>Something went wrong...</h2>}
            { isSuccess && data && 
                <div className="reviews-header">
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <h4>{data.length} {data.length === 1 ? "Review" : "Reviews"}</h4>
                    <button className="reviews-add" onClick={() => setShowAddReview(true)}>
                        <span className="reviews-add-text">Add Review</span>
                    </button>
                    </div>
                    {
                        data.length && <h4 className="reviews-average">Average {roundHalf(data.reduce((acc, cur) => cur.rating + acc, 0) / data.length)}</h4>
                    }
                </div>
            }

            { isSuccess && data?.map((review: Review, index) => 
                (
                    <div className="reviews-list" key={index}>
                        <h4>Review {index + 1}</h4>
                        {[...Array(5)].map((star, index) => {
                            return (<span key={index} className={`star ${index < review.rating ? "on" : "off"}`}>&#9733;</span>)
                        })}
                        <p>{review.text}</p>
                    </div>
                )
            )}

            {showAddReview && id && <AddReviewModal productId={id} setShowAddReview={setShowAddReview} />}
        </div>
    )
}