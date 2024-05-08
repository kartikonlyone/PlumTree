import React from 'react'
import Smcontent from '../resuable/Smcontent'
import Lcontent from '../resuable/Lcontent'
import image4 from '../Images/image-4.jpg'
import image5 from '../Images/image-5.jpg'

const ProductsDisplay = () => {
  return (
    <>
        <div className='products_card'>
        <div className='container'>
            <div className='row'>
                <Lcontent imageSrc={image4} title="CONTRAST VEST" description="CONTRAST SIDE PANELING"/>
                <Smcontent imageSrc={image5} title="LONG SLEEVE BASE LAYER" description="WINDPROOF & SHOWERPROOF "/>
            </div>
        </div>
        </div>
    </>
  )
}

export default ProductsDisplay
