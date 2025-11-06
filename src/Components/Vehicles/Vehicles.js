import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
export const Vehicles = ({data}) => {
  return (
    <div className="vehicles">
                {data.map((car)=>{
                    return(
                    <div className="vehicle">
                       <Link to={`/car/${car._id}`}> <div className='car-image' ><img src={car.image} alt="" /></div></Link>
                        <div className="availability-badge">{car.isAvaliable?'Available Now':''}</div>
                        <div className="price">{`KES ${car.pricePerDay}`}<span>/ day</span></div>
                        <div className="vehicle-data">
                            <div className="vehicle-name">{car.brand} {car.model}</div>
                            <div className="vehicle-build">{car.category} . {car.year}</div>
                            <div className="vehicle-specs">
                                <div className="spec"><img src={assets.users_icon}  alt="" />{car.seating_capacity} Seats</div>
                                <div className="spec"><img src={assets.fuel_icon}  alt="" />{car.fuel_type}</div>
                                <div className="spec"><img src={assets.carIcon}  alt="" />{car.transmission}</div>
                                <div className="spec"><img src={assets.location_icon}  alt="" />{car.location}</div>
                            </div>
                        </div>
                    </div>
                    )
                })}
               
            </div>
  )
}
