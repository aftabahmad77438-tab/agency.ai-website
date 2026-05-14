import React from 'react'
import ads_icon from '../assets/ads_icon.svg';
import content_icon from '../assets/content_icon.svg';
import marketing_icon from '../assets/marketing_icon.svg';
import social_icon from '../assets/social_icon.svg';
const Services = () => {
    let obj=[

            {title:'Advertising',
             para:'we turn bold ideas into a powerful  digital soultion.',
             icon:ads_icon
            },

            {title:'Social media',
             para:'we help you build a strong social media presence.',
             icon:social_icon
            },

           
            {title:'Content writing',
             para:'we help you create marketing strategies that drive result.',
             icon:content_icon
            },

             {title:'Content marketing',
             para:'We help you execute your plan and deliver result.',
             icon:marketing_icon
            },

            




    ];
  return (
    <>

    <div className='text-center mt-5 mb-5' id='services'>
        <h1>How Can We Help?</h1>
        <p>from strategy to execution we craft digital solution that move your<br></br> bussines forward.</p>
        <br></br>
      
    </div>

    <div  className="d-flex justify-content-around  mb-5 flex-wrap">


        {obj.map((item,index)=>(
          <div style={{border:'1px solid  #0d6efd',borderRadius:'1rem'}} className='d-flex mb-5 p-3 hover-effect ' key={index}>
            <div>
            <img src={item.icon}/>
            </div>
            <div>
            <h5>{item.title}</h5>
            <p className="two-line-text">{item.para}</p>
            </div>

            </div>

        ))}


    </div>



    </>
  )
}

export default Services
