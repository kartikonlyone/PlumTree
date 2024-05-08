import React from 'react' 
import {Link} from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <div className='banner'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <h4 className='banner_heading'><b>DOE</b> Sportswear</h4>
                <h1><b>ULTRA COOL JACKETS <br /> AND VESTS</b></h1>
                <div className='d-flex'>
                <h2>20 </h2>
                <h2 className='banner_heading custom_heading_font'>  % <br /> OFF</h2>
                </div>
                
                <Link >VIEW COLLECTION</Link>
            </div>
            <div className='col-md-6'></div>
        </div>
      </div> 
      </div>
    </>
  )
}

export default Banner
