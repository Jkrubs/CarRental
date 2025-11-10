import React,{useState} from 'react'
import './Single.css'
import { useParams } from 'react-router'
import { assets, dummyCarData } from '../../assets/assets'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'

export const Single = () => {
    const {id} = useParams()
    const car = dummyCarData.find(vehicle=>vehicle._id===id)

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
    <div className="single-container">
      <HashLink to={'/#allcars'}><div className="back-link">
        <img src={assets.arrow_icon} alt="" /> Back to all cars
        </div> </HashLink>  
    <div className="single">
        <div className="car-details">
            
            <div className="car-image-container">
                <img src={car.image} alt="" />
            </div>
            <div className="car-name">
                <div className='car-identity'>{car.brand} {car.model}</div>
                <div className='car-category'>{car.category} . {car.year}</div>

            </div>
            <hr className='divider'/>
            <div className="features">
                <div className="feature">
                    <img src={assets.users_icon} alt="" />
                    <p>{car.seating_capacity} Seats</p>
                </div>
                <div className="feature">
                    <img src={assets.fuel_icon} alt="" />
                    <p>{car.fuel_type}</p>
                </div>
                <div className="feature">
                    <img src={assets.carIcon} alt="" />
                    <p>{car.transmission}</p>
                </div>
                <div className="feature">
                    <img src={assets.location_icon} alt="" />
                    <p>{car.location}</p>
                </div>
            </div>
            <div className="description">
                <div className="description-title">Description</div>
                <p>{car.description}</p>
            </div>
            <div className="extra-features-container">
                <div className="description-title">Features</div>
            <div className="extra-features">
                <div className="extra-feature">
                    <img src={assets.check_icon}  alt="" />
                    360 Camera
                </div>
                <div className="extra-feature">
                    <img src={assets.check_icon}  alt="" />
                    GPS Tracking
                </div>
                <div className="extra-feature">
                    <img src={assets.check_icon}  alt="" />
                    Bluetooth Enabled
                </div>
                <div className="extra-feature">
                    <img src={assets.check_icon}  alt="" />
                    Heated Seats
                </div>
            </div>
                
            </div>
        </div>
        <div className="book-car">
            <div className='book-car-card  '>
                <div className="pricing">
                    <div className="single-price">KES {car.pricePerDay}</div>
                    <p>per day</p>
                </div>
                <hr className='single-divider'/>
            <form action="" className='single-car-form'>
                <div className="single-input-field">
                   <label htmlFor="pick-up-date">Pick-up date</label>
                <input type="date" id='pick-up-date'  name='pick-up-date' required value={pickupDate} onChange={handlePickupChange}min={new Date().toISOString().split("T")[0]}/> 
                </div>
                <div className="single-input-field">
                    <label htmlFor="return-date">Return Date</label>
                <input type="date" min={pickupDate || new Date().toISOString().split("T")[0]} name="return-date" id="return-date" required  value={returnDate} onChange={handleReturnChange}/>
                </div>
                <button>Book Now</button>
                <p>No credit card required to reserve </p>
            </form>
            </div>
            
        </div>
    </div>
    </div>
  )
}
