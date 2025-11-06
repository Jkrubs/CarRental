import React from 'react'
import{assets} from '../../assets/assets'
import './Footer.css'
export const Footer = () => {
    const year= new Date()
  return (
<div className="footer-container">
<div className="footer">
        <div className="footer-item-container">
            <div className="head">
                <img src={assets.logo} alt="" />
            </div>
            <p>Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.</p>
            <div className="social-media">
                <img src={assets.facebook_logo} alt="" />
                <img src={assets.instagram_logo} alt="" />
                <img src={assets.twitter_logo} alt="" />
                <img src={assets.gmail_logo} alt="" />
            </div>
        </div>
        <div className='footer-item-container'>
            <div className="head">QUICK LINKS</div>
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Browse cars</li>
                    <li>List Your car</li>
                    <li>About Us</li>
                </ul>
            </div>

        </div>
        <div className='footer-item-container'>
            <div className="head">RESOURCES</div>
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Browse cars</li>
                    <li>List Your car</li>
                    <li>About Us</li>
                </ul>
            </div>

        </div>
        <div className='footer-item-container'>
            <div className="head">CONTACT</div>
            <div className="links">
                <ul>
                    <li>CaRental, </li>
                    <li>Loswani, CA 94107</li>
                    <li>0740105052</li>
                    <li>info@carrental.com</li>
                </ul>
            </div>

        </div>  
    </div>
    <hr className='divider'/>
    <div className="bottom-footer">
        <div className="copy-right">
            <p>&copy;{year.getFullYear()}. All Rights Reseved! CarRental</p>
        </div>
        <div className="made-with-love">
           <p>Made with <span>❤</span> by Jaja</p>
        </div>
    </div>
    </div>
    
  )
}
