import React from 'react'
import {Link} from 'react-router-dom';
import { FaPhoneAlt,FaEnvelope } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
            <h2>Customer Care</h2>
              <Link>Shipping Details</Link>
              <Link>Return Policy</Link>
              <Link>Privacy Policy</Link>
              <Link>Terms & Conditions</Link>
            </div>
            <div className='col-md-3'>
              <h2>My Account</h2>
              <Link>Sign In</Link>
              <Link>View Cart</Link>
              <Link>My Wishlist</Link>
              <Link>Faq</Link>
            </div>
            <div className='col-md-3'>
              <h2>CONTACT US</h2>
              <p>2400 E.Kotella Ave., Suite <br /> 800,Anaheim, CA, 92806, <br /> United States.</p>
            </div>
            <div className='col-md-3'>
              <div className='contact_us '>
                <FaPhoneAlt />
                <p className='mx-2 m-0'><a href="tel:9632587458">9632587458</a></p>
              </div>
            <div className='contact_us mt-3'>
                <FaEnvelope />
                <p className='mx-2 m-0'><a href="mailto:care@doesoprtswear.com">care@doesoprtswear.com</a></p>
            </div>
            </div>
            <hr  className='mt-4'/>
            <div className='col-md-12 text-center'>
              Copyright © 2018 DOE Sports Wear | MADE IN USA
            </div>
          </div>
        </div>      
        </div>
    </>
  )
}

export default Footer
