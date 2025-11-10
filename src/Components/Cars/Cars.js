import React, {  useState } from 'react'
import { assets, dummyCarData } from '../../assets/assets'
import { Vehicles } from '../Vehicles/Vehicles'
import './Cars.css'
export const Cars = () => {
    const [data, setData]=useState(dummyCarData)
    const [filter, setFilter]=useState('')

    const handleFilter=(e)=>{
        e.preventDefault()
        setFilter(e.target.value)
        if (e.target.value==="") {
            setData(dummyCarData)
        }else{
            setData(data.filter((item)=>{return item.brand.toLowerCase().includes(filter.toLowerCase())}))
        }
    }
  return (
    <div className="cars-container">
        <div className="filter-cars">
            <div className="title">Available Cars</div>
            <p>Browse our selection of premium vehicles available for your next adventure</p>
            <div className="cars-search-bar">
                            <form action="" className='cars-search-form'>
                                <div className="search">
                                <img src={assets.search_icon} alt="" />
                                <input type="text" onChange={handleFilter} placeholder='Search by make, model or features' value={filter} />    
                                </div>
                                
                                <img src={assets.filter_icon} alt="" />
                            </form>
                        </div>
        </div>
        <div className="filter-result">
            <p>Showing {data.length} Cars</p>
            <Vehicles data={data}/>
        </div>
    </div>
  )
}
