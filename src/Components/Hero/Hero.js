import React, { useState } from 'react'
import './hero.css'
import { assets } from '../../assets/assets'

export const Hero = () => {

    const[pickupDate, setPickupDate]=useState()
    const[returnDate, setReturnDate]=useState()
    
  const handlePickupChange = (e) => {
    const newPickup = e.target.value;
    setPickupDate(newPickup);

    // If return date is earlier than the new pickup date, reset it
    if (returnDate && new Date(returnDate) < new Date(newPickup)) {
      setReturnDate(newPickup);
    }
  };

  const handleReturnChange = (e) => {
    const newReturn = e.target.value;
    // Prevent user from selecting a return date earlier than pickup
    if (pickupDate && new Date(newReturn) < new Date(pickupDate)) {
      alert("Return date cannot be earlier than pickup date!");
      return;
    }
    setReturnDate(newReturn);
  };
  return (
    <div className="hero-container">
   <div className="hero">
    <h1>Luxury Cars For Hire</h1>
    <div className="hire-search-bar">
        <form action="" className='hire-search-form'>
            <div className="input-fields">
               <div className="input-field">
               <label htmlFor="location">Pick-up Location</label>
                <input type="text" placeholder='Please select location'/> 
            </div>
            <div className="input-field">
               <label htmlFor="pick-up-date">Pick-up Date</label>
                <input onChange={handlePickupChange} type="date" id='pick-up-date' min={new Date().toISOString().split("T")[0]} value={pickupDate}/> 
            </div>
            <div className="input-field">
               <label htmlFor="return-date">Return Date</label>
                <input onChange={handleReturnChange} type="date" id='return-date' value={returnDate} min={pickupDate || new Date().toISOString().split("T")[0]}/> 
            </div> 
            </div>
            
            <button><img src={assets.search_icon} alt="" />Search</button>
        </form>
    </div>
    <div className="main-car"><img  src={assets.main_car} alt="" /></div>
   </div>
   </div>
  )
}
