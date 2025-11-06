import React from 'react'
import './Banner.css'
import { assets } from '../../assets/assets'

export const Banner = () => {
  return (
<div className="banner">
    <div className="banner-text">
        <div className="banner-title">
            Do you Own A Luxury Car?
        </div>
        <p>Monetize your vehicle effortlessly by listing it on CarRental.<br/>We take care of insurance, driver verification and secure payments — so<br/>you can earn passive income, stress-free.</p>
        <button>List your car</button>
    </div>
    <div className="image-container">
        <img src={assets.banner_car_image} alt="" />
    </div>
</div>
  )
}
