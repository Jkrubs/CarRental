import React from 'react'
import './Newsletter.css'
export const Newsletter = () => {
  return (
    <div className="news-container">
        <div className="title">Never Miss a Deal!</div>
        <p>Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
        <div className="subscribe">
            <form action="" className='subscribe-form'>
                <input type="email" placeholder='Enter your email' />
                <button>Subscribe Now</button>
            </form>
        </div>
    </div>
  )
}
