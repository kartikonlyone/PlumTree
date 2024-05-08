import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogle,FaSearch,FaShoppingCart,FaUser } from 'react-icons/fa';


const Header = () => {
  return (
    <>
      <div className='top_header'>
        <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
          <div className='left_top_content'>
            <p className='m-0'>FREE SHIPPING & FREE RETURNS</p>
          </div>
          </div>
          <div className='col-md-6'>
          <div className='social'>
          <Link to="/"><FaFacebook /> </Link>
      <Link to="/"><FaTwitter /> </Link>
      <Link to="/"><FaGoogle /></Link>
          </div>
          </div>
        </div> 
        </div>
      </div>
      <div className='main_header'>
        <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
          <div className='logo'>
           <Link to="/"><img src={logo} alt="" /></Link> 
          </div>
          </div>
          <div className='col-md-5'>
          <div className='menu'>
  <Link to="/">Men</Link>
  <Link to="/">Women</Link>
  <Link to="/">Accessories</Link>
</div>
          </div>
          <div className='col-md-4'>  
          <div className='header_right_wrapper'>
            <div className='search d-flex'>
              <input type="text" placeholder='Search' /> <div className='search_icon'><FaSearch /></div>
            </div>  
            <div className='cart d-flex'>
            <div className='cart_icon'>
            <FaShoppingCart />
            </div>
           <p className='m-0'>0</p>
            </div>  
            <div className='user'>
            <FaUser />
            </div> 
            </div>
            
            
            
          </div>
        </div>
          



        </div>
      </div>
    </>
  )
}

export default Header
