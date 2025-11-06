import React from 'react'
import { assets } from '../../assets/assets'

export const Addcar = () => {
  return (
   <div className="add-new-car">
    <div className="head-title">Add New Car</div>
    <p>Fill in details to list a new car for booking, including pricing, availability, and car <br />specifications.</p>
    <form action="" className='add-new-form'>
      <div className="brand-model">
        <div className="add-input-field">
          <label htmlFor="brand">Brand</label>
          <input type="text" name="brand" id="brand" placeholder='e.g BMW, Mercedes'/>
        </div>
        <div className="add-input-field">
          <label htmlFor="model">Model</label>
          <input type="text" name="model" id="model" placeholder='e.g c200 amg'/>
        </div>
      </div>
      <div className="details">
        <div className="details-input-field">
          <label htmlFor="year">Year</label>
          <input type="year" placeholder='2021' />
        </div>
        <div className="details-input-field">
          <label htmlFor="price">Daily Price</label>
          <input type="number" />
        </div>
        <div className="details-input-field">
          <label htmlFor="category">Category</label>
          <input type="text"/>
        </div>
        <div className="details-input-field">
          <label htmlFor="transmission">Transmission</label>
          <input type="text" id='transmission' />
        </div>
        <div className="details-input-field">
          <label htmlFor="fuel">Fuel Type</label>
          <input type="text" id='fuel' />
        </div>
        <div className="details-input-field">
          <label htmlFor="seating">Seating Capacity</label>
          <input type="number" id='seating' />
        </div>
      </div>
      <div className="final-info">
        <div className="location-input-field">
          <label htmlFor="location">Location</label>
          <input type="text" id='location' />
        </div>
        <div className="location-input-field">
          <label htmlFor='description'>Description</label>
          <textarea name="description" id="description" placeholder='e.g A luxurious SUV with a spacious interior and a powerful engine'></textarea>
        </div>
      </div>
      <button><img src={assets.tick_icon} alt="" />List Your Car</button>
    </form>
   </div>
  )
}
