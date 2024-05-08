import React from 'react';
import ProductsArray from '../Array/ProductsArray';
import { FaStar,FaShoppingCart,FaHeart } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const ProductCard = () => {
  return (
    <> 
      <div className='container'>
        <div className='row'>
          <div className='products_heading'>
            <h2>New Arrival</h2>
          </div>
          {ProductsArray.map(product => (
            <div key={product.id} className="col-md-3">
              <div className='product_img'>
                <img src={product.img} alt={product.name} />
              </div>
              <div className='product_name mt-3'>
                <h6>{product.name}</h6>
                <h6>{product.price}</h6>
              </div>
              <div className='ratings d-flex'>
              <FaStar style={{ color: '#6e618c' }}/>
              <FaStar style={{ color: '#6e618c' }}/>
              <FaStar style={{ color: '#6e618c' }}/>
              <FaStar style={{ color: '#6e618c' }}/>
              <FaStar style={{ color: '#777777' }}/>
              </div>
              <div className='whishlist d-flex'>
              <div class="cart_icon_products"> 
              <Link to="/"><FaShoppingCart /></Link>
              </div>
              <div class="cart_icon_products mx-2"> 
              <Link to="/"><FaHeart  /></Link> 
              </div>
              </div> 
            </div>
          ))}
        </div>
      </div> 
    </>
  )
}

export default ProductCard;
