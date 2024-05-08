import React from 'react';
import { Link } from 'react-router-dom';

const Lcontent = ({ imageSrc, title, description }) => {
  return (
    <div className='col-md-8'>
      <div className='item_large'>
        <img className="item_image" src={imageSrc} alt="Item Image" />
        <div className='item_large_content'> 
          <h2>{title}</h2>
          <p>{description}</p>
          <Link className='shop_btn'>SHOP NOW</Link>
        </div>
      </div>
    </div>
  );
};

export default Lcontent;
