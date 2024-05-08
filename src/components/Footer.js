import React from 'react'
import {Link} from 'react-router-dom';
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
              <h2>Address</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nesciunt eveniet in nam eos minima.</p>
            </div>
            <div className='col-md-3'>
              
            </div>
          </div>
        </div>      
        </div>
    </>
  )
}

export default Footer
