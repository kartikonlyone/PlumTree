import React from 'react'
import Smcontent from '../resuable/Smcontent'
import Lcontent from '../resuable/Lcontent'

const ProductsShop = () => {
  return (
    <>
    <div className='products_card'>
        <div className='container'>
            <div className='row'>
                <Smcontent/>
                <Lcontent/>
            </div>
        </div>
        </div>
    </>
  )
}

export default ProductsShop
