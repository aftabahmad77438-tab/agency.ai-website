import React from 'react'
import google_logo from '../assets/google_logo.svg';
import airbnb_logo from '../assets/airbnb_logo.svg';
import microsoft_logo from '../assets/microsoft_logo.png';
import rakuten_logo from '../assets/rakuten_logo.png';
import zoom_logo from '../assets/zoom_logo.png';
import coinbase_logo from '../assets/coinbase_logo.png';
import bgimage2 from '../assets/bgimage2.png';
import menu_icon from '../assets/menu_icon.svg';

const Companies = ({mood}) => {
  return (
    <>
  
    <p className='text-center mt-5 mb-5'>Trusted by leading companies</p>

   <div className="d-flex flex-wrap justify-content-center mb-5 gap-3" >
          
    <img style={{width:'4rem'}} src={coinbase_logo}/>
    <img style={{width:'4rem'}}  src={google_logo}/>
    <img style={{width:'4rem'}}  src={rakuten_logo}/>
    <img style={{width:'4rem'}}  src={microsoft_logo}/>
    <img style={{width:'4rem'}}  src={airbnb_logo}/>
    <img style={{width:'4rem'}}  src={zoom_logo}/>

   </div>

   


   </>

  )
  
}

export default Companies
