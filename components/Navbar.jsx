import React, { useState } from 'react'
import logo from '../assets/logo.svg';
import logo_dark from '../assets/logo_dark.svg';
import sun_icon from '../assets/sun_icon.svg';
import moon_icon from '../assets/moon_icon.svg';

const Navbar = ({darkmood,mood,setmood}) => {
    

   

  return (
    
    <div className='p-5'>

        

      <nav style={{ ...mood, width: '100%', maxWidth: '100vw' }} className="navbar navbar-expand-lg fixed-top ">
        <div className="container-fluid">
        
          
          <a className="navbar-brand" href="#">
           <img src={mood.backgroundColor === 'black' ? logo_dark : logo} alt="logo" />
            </a>

          

        
          <div  className="collapse navbar-collapse "  id="navbarNavAltMarkup">
            <div  className="navbar-nav mx-auto">
              <a style={mood}  className="nav-link active" aria-current="page" href="#">Home</a>
              <a style={mood}  className="nav-link" href="#services">services</a>
              <a style={mood}  className="nav-link" href="#work">our work</a>
              <a style={mood}  className="nav-link " href="#contact">contact us</a>
            </div>
          </div>

          


          <div>
         <img onClick={darkmood} src={mood.backgroundColor==='black'?sun_icon:moon_icon}/>
          <button className='btn btn-primary mx-2'>connect <i className="fa-solid fa-arrow-right"></i></button>
          </div>
        
         <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ borderColor: mood.color }}
          >
            <span
              className="navbar-toggler-icon"
              style={{ filter: mood.backgroundColor === 'black' ? 'invert(1)' : 'none' }}
            />
          </button>
          </div>
      </nav>
      
    </div>
  )
}

export default Navbar
