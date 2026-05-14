import React from 'react'
import work_fitness_app from '../assets/work_fitness_app.png';
import work_dashboard_management from '../assets/work_dashboard_management.png';
import work_mobile_app from '../assets/work_mobile_app.png';

const Ourwork = () => {

        let proj=[

            {img:work_dashboard_management,
            title:'dashbored managment ',
            para:'check this out '

            },
            {img:work_fitness_app,
            title:'Fitness app promotion ',
            para:'check this out '

            },
            {img:work_mobile_app,
            title:'Mobile app marketing ',
            para:'check this out '

            }
        ]



  return (
    <>

    <div className='text-center px-3' id='work'>

        <h1 className='mt-5'>Our Latest Work</h1>
        <p>browse our different projects to see our innovational works.</p>
        <br></br>
      

    </div>

        {/* <div className='d-flex justify-content-around gap-2 mb-5'>
            {proj.map((item,index)=>(

                <div className='border rounded card' style={{border:'1px solid gray',boxShadow:'0px 3px 8px rgba(0,0,0,0.15) ' }} key={index} >
                    <img className='img-fluid w-100' style={{margin:'1rem',objectFit: 'cover',height:'200px'}} src={item.img}/>
                    <h5 className='text-center'>{item.title}</h5>
                    <p className='text-center'>{item.para}</p>

                </div>


            ))}

        </div> */}


        <div className='row justify-content-around mb-5 mt-5'>

        {proj.map((item,index)=>(


        <div key={index} className="card m-2" style={{width: '18rem'}}>
          <img src={item.img} className="card-img-top pt-1" alt="..." />
          <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.para}</p>
        
         </div>
        </div>

        ))}

       
       </div>
  
    

    
    </>


  )
}

export default Ourwork
