import React from 'react'
import { assets } from '../../assets/assets'
import './Pages.css'

export const Dashboard = () => {
  return (
    //Requires user from the db
    <div className="admin-dashboard">
        <div className="head-title">Admin Dashboard</div>
        <p>Monitor overall platform performance including total cars, bookings, revenue, and <br/>recent activities</p>
        <div className="dashboard-cards">
            <div className="dashboard-card">
                <div className="car-numbers">
                    <p>Total Cars</p>
                    <div className='car-count'>0</div>
                </div>
                <div className="icon">
                    <img src={assets.carIconColored} alt="" />
                </div>
            </div>
            <div className="dashboard-card">
                <div className="car-numbers">
                    <p>Total Bookings</p>
                    <div className='car-count'>0</div>
                </div>
                <div className="icon">
                    <img src={assets.listIconColored} alt="" />
                </div>
            </div>
            <div className="dashboard-card">
                <div className="car-numbers">
                    <p>Pending</p>
                    <div className='car-count'>0</div>
                </div>
                <div className="icon">
                    <img src={assets.cautionIconColored} alt="" />
                </div>
            </div>
            <div className="dashboard-card">
                <div className="car-numbers">
                    <p>Confirmed</p>
                    <div className='car-count'>0</div>
                </div>
                <div className="icon">
                    <img src={assets.listIconColored} alt="" />
                </div>
            </div>
        </div>
        <div className="revenue">
            <div className="recent-bookings">
                <div className="revenue-title">Recent Bookings</div>
                <p>Latest customer bookings</p>
            </div>
            <div className="monthly-revenue">
                <div className="revenue-title">Monthly Revenue</div>
                <p>Revenue for current month</p>
                <div className='earning'>KES 0</div>
            </div>
        </div>
    </div>
  )
}
