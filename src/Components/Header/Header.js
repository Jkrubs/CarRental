import React, { useState } from 'react'
import './Header.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { Login } from '../Login/Login'
export const Header = () => {
    const[isopen, setIsopen]=useState(false)
    const[ismobilemenu, setIsmobilemenu]=useState(false)

    const handleIsopen=()=>{
        setIsopen(true)
    }

    const handleMenu=()=>{
        setIsmobilemenu(prev=>!prev)
    }
  return (
    <div className="header-container">
        <div className="header">
        <div className="logo">
            <Link to={'/'}><img src={assets.logo} alt="" /></Link>
        </div>
        <div className={ismobilemenu?'mobile-menu':'closed-menu'}>
        <div className="desktop-menu">
           <ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/cars'}><li>Cars</li></Link>
            <Link to={'/my bookings'}><li>My Bookings</li></Link>
            <div className="search-bar">
                <form action="" className='search-form'>
                    <input type="text" placeholder='Search cars' />
                    <button><img src={assets.search_icon} alt="" /></button>
                </form>
            </div>
            <li>List cars</li>
            </ul> 
           
        </div>
         <div className="header-btn">
                <button onClick={handleIsopen}>Login</button>
               
        </div>
    </div>
    <div className='menu'>
        {ismobilemenu?
        <img onClick={handleMenu} src={assets.close_icon} alt=""/>
        :
        <img onClick={handleMenu}src={assets.menu_icon} alt=""/>
        }
        
    </div>
    </div>
    <Login open={isopen} setIsopen={setIsopen} />
    </div>
    
  )
}
