import React from 'react'
import image6 from '../Images/image-6.jpg'
const Newsletter = () => {
  return (
    <> 
        <div className='newsletter'>
            <div className='container'>
                <div className='news_wrap d-flex justify-content-between align-items-center'> 
                <div className='news_inner_wrap'>
                    <div className='newsletter_heading d-flex'>
                    <h2 className='sign_up'><b>SIGN UP </b><br /><span className='news_color get_news'>& GET </span> </h2>
                    <h2 className='special_text'> <b>20</b></h2>
                    <h2 className='news_color'><b>% <br />OFF</b></h2> 
                    </div>
                    <div className='news_cont'>
                    <p>Be the first to know about the latest fashion and get exclusive offers</p>   
                    </div>
                    </div>
                     
                        <div className='newsletter_form'>
                            <input type="text" placeholder='Enter Email Address'/>
                            <button>Sign Up</button>
                        </div> 
                </div>
            </div>
        </div>
    </>
  )
}

export default Newsletter
