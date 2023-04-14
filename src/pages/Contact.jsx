import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import '../pages/Contact.css'
import {protein} from '../Helpers/protein_pictures'
import {map_streets} from '../Helpers/street_map'

function Contact() {

 
  

  return (
    <div>
      <Navbar/>
      <div className="contact_section">
        <div className="ovarlay"></div>
        <img src={protein.backImg} alt="" />
        <h1>Contact us</h1>
      </div>
      <div className="contact_us">
        <div className="branches_offices">
          <div>
              <h3>Branches and representive offices</h3>
            </div>
          <div className="office_city">
            <ul>
              <li><a  href="#">London UK</a></li>
              <li><a  href="#">Ruse BG</a></li>
              <li><a  href="#">Sofia BG</a></li>
            </ul>
              <div className="office_streets">
                  <div className="streets">
                    <h4>10,First Avenue, Mushwell Hill</h4>
                  </div>
                  < div className="streets">
                    <h4>Ruse,Bulgaria
                      University of Ruse</h4>
                    </div>
                    <div className="streets">
                      <h4>10,First Avenue, Mushwell Hill</h4>
                  </div>
              </div>
          </div>
         
        </div>

        <div className="contact_form">
            <h3>Contact form</h3>
            <p>Fill out form below to recieve a free and confidential initil consultation.</p>
            <form action="">
              <div className="inputs">
                <input type="text"  placeholder='Name'/>
                <input type="text"  placeholder='Phone'/>
                <input type="email"  placeholder='Your Email Here'/>
                <input type="text"  placeholder='Subject'/>
              </div>
              
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <button>Sumbit</button>
            </form>
        </div>
      </div>
      <div className="map">
        
        <iframe width="100%" height="500" id="gmap_canvas" src={map_streets.ruse} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
      </div> 
      <div className="footer">
        <div className="social-info">
          <div className="logo">
          <i className="fa-brands fa-reacteurope"></i>
          </div>
          <div className="compani_sites">
              <a href="#">boom.com</a>
              <a href="#">devin.bg</a>
              <a href="#">velingrad.bg</a>
          </div>
          <div className="location_info">
            <a href="#">Bulgaria</a>
            <a href="#">Turkey</a>
            <a href="#">Italy</a>
            <a href="#">Germany</a>
          </div>
          <div className="phone_info">
              <h3>+359 899 048 798</h3>
              <a href="">terdinch123@gmail.com</a>
          </div>
        </div>
        <p className="minitext">Copyright 2023 by TanjuDev</p>
      </div>
    </div>
  )
}

export default Contact;
