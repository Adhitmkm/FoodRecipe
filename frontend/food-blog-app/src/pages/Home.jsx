import React, { useState } from 'react'
import foodRecipe from '../assets/foodRecipe.png'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Recipeitems from '../components/Recipeitems'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import InputForm from '../components/InputForm'

export default function Home() {
  const navigate = useNavigate()
  const[isOpen, setIsOpen] = useState(false)
  const addRecipe=()=>{
    let token = localStorage.getItem("token")
    if(token){
      navigate("/addRecipe")
    }else{
      setIsOpen(true)
    }
  }
  return (
    <>
        <section className='home'>
            <div className="left">
                <h1>Food Recipe</h1>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis cupiditate commodi animi iste vel fuga iure,
                    quasi odit fugiat nisi mollitia molestias ullam quibusdam. Nisi possimus ipsa delectus eos rerum.</h5>
                    <button onClick={addRecipe}>Share Your Recipe</button>
            </div>
            <div className="left">
                <img src={foodRecipe} width="320px" height="300px" /></div> 
        </section>
        <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,160L26.7,138.7C53.3,117,107,75,160,90.7C213.3,107,267,181,320,224C373.3,267,427,277,480,266.7C533.3,256,587,224,640,218.7C693.3,213,747,235,800,218.7C853.3,203,907,149,960,160C1013.3,171,1067,245,1120,250.7C1173.3,256,1227,192,1280,160C1333.3,128,1387,128,1413,128L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
        </div>

                  { (isOpen) && <Modal onClose={()=>setIsOpen(false)}> <InputForm setIsOpen={()=>setIsOpen(false)}/> </Modal>}
          

        <div className='recipe'>
            <Recipeitems/>
        </div>
    </>
  )
}
