import React, { useState } from 'react'
import { HiX } from 'react-icons/hi'
import { Rating } from 'react-simple-star-rating'
import { useAddReviewMutation } from '../../services/productApi'
import { Review } from '../../models/review.model'
import './styles.scss'

export default function AddReviewModal({ setShowAddReview, productId }: {setShowAddReview: (value: boolean) => void, productId: string} ) {
    const [rating, setRating] = useState(0)
    const [description, setDescription] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [addReview] = useAddReviewMutation()
    const handleClose = () => {
        setShowAddReview(false)
    }

    const handleRating = (rate: number) => {
        const numMap: Record<number, number>= {
            20: 1,
            40: 2,
            60: 3,
            80: 4,
            100: 5
        }

        setRating(numMap[rate])
    }

    const handleOnChange = (event: { target: { value: string }}) => {
        setDescription(event.target.value)
    }

    const handleSubmit = async () => {
        if(rating === 0) {
            setError('Add a rating')
            return
        } else if (description.length < 1) {
            setError('Add a description')
            return
        }

        const review: Review = {
            rating,
            text: description
        }
        
        const data = await addReview({id: productId, review})
        
        if(data) {
            setShowAddReview(false)
            window.location.reload();
        }
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="reviews-title">Add Review</h2>
                    <button className="modal-close" onClick={handleClose}><HiX size={24}/></button>
                </div>
                <div className="modal-body">
                    <h4>Your rating <span style={{color: "red"}}>*</span></h4>
                    <Rating 
                        onClick={handleRating} 
                        ratingValue={rating} 
                        fillColor='black' 
                        size={22} 
                        showTooltip
                        tooltipArray={['Terrible', 'Bad', 'Average', 'Great', 'Prefect']}
                    />
                    <h4>Description <span style={{color: "red"}}>*</span></h4>
                    <textarea style={{width: "100%", marginBottom: "2rem"}} rows={4} cols={20} onChange={handleOnChange}/>
                    <button className="modal-submit" onClick={handleSubmit}>Submit Review</button>
                </div>
                {error && <p style={{color: "red"}}>{error}</p>}
            </div>
        </div>
    )
}