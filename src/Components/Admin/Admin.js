import React, { useState } from 'react'
import './Admin.css'
import { assets, ownerMenuLinks } from '../../assets/assets'
import { Dashboard } from '../Pages/Dashboard'
import {Addcar} from '../Pages/Addcar'
import{Managecars} from '../Pages/Managecars'
import {Bookings} from '../Pages/Bookings'
export const Admin = () => {
    const[active, setActive]=useState('Dashboard')
  return (
    <div className="admin">
        <div className="sidebar">
            <div className="admin-profile">
                <img src={assets.user_profile} alt="" />
                <p>Admin 001</p>
            </div>
            <div className="dashboard-btns">
                {
                    ownerMenuLinks.map((link)=>{
                        return(
                            <div id='dashboard-btn' onClick={()=>{setActive(`${link.name}`)}}>
                               {
                                active===link.name? 
                                <div className="dashboard-btn-active">
                                    <img src={link.coloredIcon} alt=''/>
                                    <p>{link.name}</p>
                                </div>
                                
                                :<div className="dashboard-btn">
                                    <img src={link.icon} alt=''/>
                                    <p>{link.name}</p>
                                </div>
                        
                              
                               }
                                
                            </div>
                        )
                    })
                }

                {/* <div onClick={()=>{setActive('dashboard')}} className='dashboard' id="dashboard-btn">
                    <img src={assets.dashboardIcon} alt="" />
                    <p>Dashboard</p>
                </div>
                <div onClick={()=>{setActive('addcar')}} className='addcar' id="dashboard-btn">
                    <img src={assets.addIcon} alt="" />
                    <p>Add car</p>
                </div>
             <div onClick={()=>{setActive('manage')}} className='manage' id="dashboard-btn">
                    <img src={assets.carIcon} alt="" />
                    <p>Manage Cars</p>
                </div>
                <div onClick={()=>{setActive('bookings')}} className='bookings' id="dashboard-btn">
                    <img src={assets.listIcon} alt="" />
                    <p>Manage Bookings</p>
                </div> */}
            </div>
        </div>
        <div className="content">
               {active==='Dashboard'&&<Dashboard/>} 
               {active==='Add car'&&<Addcar/>} 
               {active==='Manage Cars'&&<Managecars/>} 
               {active==='Manage Bookings'&&<Bookings/>} 
        </div>
    </div>
  )
}
