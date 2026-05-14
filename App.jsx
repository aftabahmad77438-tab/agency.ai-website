
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Companies from './components/Companies';
import Services from './components/Services';
import Ourwork from './components/Ourwork';
import Team from './components/Team';
import Contact from './components/Contact';
import {Toaster} from 'react-hot-toast';
import Footer from './components/Footer';

function App() {

  const [mood,setmood]=useState({backgroundColor:'white',color:'black'});

        let darkmood=()=>{
            if(mood.backgroundColor==='white'){
                setmood({ backgroundColor:'black',color:'white'});

            }else{
                setmood({backgroundColor:'white',color:'black'});
            }

            
        }

    return(
      <>

      <div style={mood}>
        
        <Toaster/>
      
      <Navbar mood={mood} darkmood={darkmood} setmood={setmood}/>
      <Hero mood={mood}/>
      <Companies mood={mood}/>
      
      <Services/>

      <Ourwork/>

      <Team/>
      <Contact/>
      <Footer mood={mood} setmood={setmood}/>



      </div>











      </>
    )


}

export default App
