import React from 'react'
import toast from 'react-hot-toast';




const Contact=()=>{

  
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "af99b3e7-ec01-4187-925f-719d322d81fc");


    try {
       const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success('thank u for submission');
     
      event.target.reset();
    } else {
      toast.error(data.message);


    }
    } catch (error) {
       toast.error(error.message);
      
    }
    

   

  };
 

  return (

    <>


        <div id='contact' className='text-center'>

        <h1>Reach out to us</h1>
        <p>Ready to grow your brand?<br></br> let's connect and build something exceptional</p>
        <br></br>
      
       </div>


       <form onSubmit={onSubmit} className='row justify-content-center shadow-sm 'style={{marginBottom:'2rem'}} required>
       <div className="col-5 shadow-sm">
       <div className="mx-auto">
      <label htmlFor="inputPassword3" className="col col-form-label">Name</label>
      <div>
        <input type="text"  name="name"  className="form-control" id="inputPassword3" placeholder='enter name' required/>
      </div>
    </div>
    

    <div>
      <label htmlFor="inputEmail3" className="col col-form-label"  >Email</label>
      <div>
        <input type="email" name="email"  className="form-control" id="inputEmail3" placeholder='enter email' required/>
      </div>
    </div>
     
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
      <textarea className="form-control" name="message"  id="exampleFormControlTextarea1" rows="3" placeholder='enter message' required></textarea>
    </div>
    
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>

       
   
</form>
  

     
    </>
  )
}

export default Contact
