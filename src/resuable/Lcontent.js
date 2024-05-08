import React from 'react'
import imagelm from '../Images/image-1.jpg'
import {Link} from 'react-router-dom'

const Lcontent = () => {
  return (
    <>
        <div className='col-md-8'>
    <div className='item_large'>
      <img className="item_image" src={imagelm} alt="Item Image" />
      <div className='item_large_content'> 
        <h2>RUNNING JACKETS</h2>
        <p>CONTRAST SIDE PANNELLING</p>
        <Link className='shop_btn'>SHOP NOW</Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default Lcontent
