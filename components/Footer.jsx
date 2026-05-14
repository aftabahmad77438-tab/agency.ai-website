import React from 'react'
import logo from '../assets/logo.svg';
import logo_dark from '../assets/logo_dark.svg';
import facebook_icon  from '../assets/facebook_icon.svg';
import twitter_icon  from '../assets/twitter_icon.svg';
import instagram_icon  from '../assets/instagram_icon.svg';
import linkedin_icon  from '../assets/linkedin_icon.svg';


const Footer = ({mood,setmood}) => {
  return (
<>

<div className='row justify-content-space-around p-3  'style={{opacity:0.8}}>

    <div className='col text-center p-2'>
        <img className='mb-2' src={mood.backgroundColor=='black'?logo_dark:logo}/>
        <p>from strategies to execution we will move<br></br> your bussiness forward.</p>
        <div>
            <a style={{textDecoration:'none',margin:'4px'}} href='#'>Home</a>
            <a style={{textDecoration:'none',margin:'4px'}} href='#services'>services</a>
            <a style={{textDecoration:'none',margin:'4px'}} href='#work'>Ourwork</a>
            <a style={{textDecoration:'none',margin:'4px'}} href='#contact'>contact us</a>
        </div>

    </div>


    <div className='col text-center'>
            <h5>subscribe to our newsletter</h5>
            <p className='small'>The latest news,article resources sent to your inbox weekly</p>
            <div className='flex flex-wrap'>
                <input type='email' placeholder='enter your email ' className='border rounded shadow-sm '></input>
                <button className='btn btn-primary m-1 '>Subscribe</button>
            </div>


    </div>

    <div  className='d-flex justify-content-around mt-5 shadow-sm  ' style={{opacity:0.8}}>


        <div style={{marginBottom:0,paddingTop:'3px'}} >

            <p  style={{opacity:0.7}}>copyright 2026. Aftab ahmad </p>
        </div>

        <div style={{marginBottom:0,paddingTop:'3px'}} >
                <img className='m-1' src={facebook_icon} />
                <img className='m-1'  src={twitter_icon}/>
                <img className='m-1' src={instagram_icon}/>
                <img className='m-1' src={linkedin_icon}/>

        </div>






    </div>









</div>















</>
  )
}

export default Footer
