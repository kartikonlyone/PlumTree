import React from 'react'
import Smcontent from '../resuable/Smcontent'
import Lcontent from '../resuable/Lcontent'
import image from '../Images/image-1.jpg'
import image2 from '../Images/image-2.jpg'

const ProductsShop = () => {
  return (
    <>
    <div className='products_card'>
        <div className='container'>
            <div className='row'>
                <Smcontent imageSrc={image2} title="UNISEX JACKETS" description="WINDPROOF & SHOWERPROOF "/>
                <Lcontent imageSrc={image} title="RUNNING JACKETS" description="CONTRAST SIDE PANELING"/>
            </div>
        </div>
        </div>
    </>
  )
}

export default ProductsShop
