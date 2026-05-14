import React from 'react'
import { teamData } from '../assets/assets'

const Team = () => {
  return (

    <div className='mb-5 mt-5'> 
        <div className='text-center px-3'>
        <h1>Meet the team</h1>
        <p>A passianate and experienced team for your brand success.</p>
        <br></br>
      
       </div>


       <div className='d-flex justify-content-center align-item-center gap-1 flex-wrap '>
          
          {teamData.map((data,index)=>(

            <div style={{width:'16rem',borderRadius:'50px'}} className=' mt-5 person d-flex mb-2 p-2 "col-6 col-sm-4 col-lg-3" '  key={index}>
                <img style={{width:'4rem',borderRadius:'3rem'}} src={data.image}/>

                <div>
                <h5 style={{fontSize:'1rem',paddingLeft:'10px'}}>{data.name}</h5>
                <p  style={{fontSize:'0.8rem',paddingLeft:'10px'}} className=' small text-center '>{data.title}</p>
                </div>
            </div>


          ))}

       </div>
      
    </div>
  )
}

export default Team
