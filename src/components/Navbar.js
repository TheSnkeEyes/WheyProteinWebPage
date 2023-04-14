import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar.css'


function Navbar() {
  
  return (
    <div>
      <div className='Navbar container'>
        <div className="top_navbar">
            <ul className='social_media'>
              <li><a href='https://www.instagram.com/tanjuerdinch/'><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href='https://www.instagram.com/tanjuerdinch/'><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href='https://www.instagram.com/tanjuerdinch/'><i className="fa-brands fa-github"></i></a></li>
              <li><a href='https://www.instagram.com/tanjuerdinch/'><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
          <div className='profile'>
            <div className='profile_media'>
                <div className='user_media'>
                  <i className="fa-solid fa-user"></i>
                </div>
                <a href='https://mail.google.com/mail/u/0/#inbox?compose=VpCqJQvlqqTmDCWcHKXJHPrTKwbzDHgsPqJsCgKLZGwXhQgQwpBWzlljrPVwVlBHgwdWRMg'>terdinch123@gmail.com</a>
            </div>
            <div className='profile_media'>
                <div className='user_media'>
                <i className="fa-sharp fa-solid fa-location-dot"></i>
                </div>
                <a href='https://www.google.com/maps/place/%D0%A0%D1%83%D1%81%D0%B5/@43.8217195,25.8897524,12z/data=!3m1!4b1!4m6!3m5!1s0x40ae60b47fe2a385:0xbe27db5216286802!8m2!3d43.8355713!4d25.9656554!16zL20vMDFwNF9f'>Ruse, Bulgaria 7000</a>
            </div>
            <div className='profile_media'>
                <div className='user_media'>
                <i className="fa-solid fa-phone"></i>
                </div>
                <a href='tel:+359 899 048 798'>+359 899 048 798</a>
            </div>
            <div className='profile_media'>
                <div className='user_media'>
                  <i className="fa-solid fa-search"></i>
                </div>
                
            </div>
          </div>
        
        </div>
        <div className="bottom_navbar">
          <div className="logo">
          <i className="fa-brands fa-reacteurope"></i>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/supplements">Supplements</Link>
            </li>
            <li id='contact'>
              <Link to="/contact">Contact Us</Link>
            </li>
             
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
