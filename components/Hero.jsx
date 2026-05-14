import React from 'react'
import group_profile from '../assets/group_profile.png';
import hero_img from '../assets/hero_img.png';
import bgimage1 from '../assets/bgimage1.png';
import menu_icon from '../assets/menu_icon.svg';

const Hero = ({mood}) => {
  return (
    <div className='m-5 mb-5 '>
        <div  style={{textAlign:'center', fontSize:'0.8rem'}}>
            <img style={{width:'5rem'}} src={group_profile}/>
            <p> Trusted by 10k+ people</p>
        </div>

        <h1 style={{textAlign:'center'}}>Turning imagination into <br></br><span style={{color:'#378bf1'}}>digital </span> impact.</h1>
     
      <p style={{textAlign:'center'}}>Creating meaningful connections and turning big ideas into <br></br> interactive digital experience.</p>

   
    <div className='d-flex justify-content-center mb-5'>

            <img className='w-100 w-md-75 img-fluid'  style={{width:'70%'}} src={hero_img}/>
    </div>

    </div>


  )
}

export default Hero
