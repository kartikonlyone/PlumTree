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
                <h2>20<span className='banner_heading'> %OFF</span> </h2>
                <Link>VIEW COLLECTION</Link>
            </div>
            <div className='col-md-6'></div>
        </div>
      </div>
        {/* <img src={banner} alt="" /> */}
      </div>
    </>
  )
}

export default Banner
