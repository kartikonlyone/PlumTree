import React from 'react'; 
import imagesm from '../Images/image-2.jpg'
import {Link} from 'react-router-dom'

const ItemSmall = () => {
  return (
    <>
    <div className='col-md-4'>
    <div className='item_small'>
      <img className="item_image" src={imagesm} alt="Item Image" />
      <div className='item_small_content'> 
        <h2>UNISEX JACKETS</h2>
        <p>WINDPROOF & SHOWERPROOF</p>
        <Link className='shop_btn'>SHOP NOW</Link>
      </div>
    </div>
    </div>
    </>
  );
};

export default ItemSmall;
