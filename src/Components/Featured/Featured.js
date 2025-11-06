import React from 'react'
import './Featured.css'
import { assets, dummyCarData} from '../../assets/assets'
import { Vehicles } from '../Vehicles/Vehicles'


export const Featured = () => {
  const data=dummyCarData
  return (
    <div className="featured-cars" id='allcars'>
        <div className='title'>Featured Vehicles</div>
        <div className='tag-line'>Explore our selection of premium vehicles available for your next adventure.</div>
        <Vehicles data={data}/>
         <div className="explore-btn"><button>Explore all cars <img src={assets.arrow_icon} alt=''/> </button></div>
    </div>
  )
}
