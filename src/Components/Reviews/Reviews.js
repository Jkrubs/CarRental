import React from 'react'
import './Reviews.css'
import { assets, dummyReviewsData } from '../../assets/assets'

export const Reviews = () => {
  return (
    <div className="container">
        <div className="title">What Our Customers Say</div>
        <p>Discover why discerning travelers choose StayVenture for their luxury accommodations<br/>around the world.</p>
        <div className="reviews">
            {dummyReviewsData.map((review)=>{
                return(
                    <div className="review">
                        <div className="profile">
                            <div className="profile-picture">
                                <img src={review.image} alt="" />
                            </div>
                            <div className="profile-details">
                                <div className="user-name">{review.name}</div>
                                <div className="user-location">{review.location}</div>
                            </div>
                        </div>
                        <div className="rating">
                            <img src={assets.star_icon} alt="" />
                            <img src={assets.star_icon} alt="" />
                            <img src={assets.star_icon} alt="" />
                            <img src={assets.star_icon} alt="" />
                            <img src={assets.star_icon} alt="" />
                        </div>
                        <div className="message">{`"${review.review}"`}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
