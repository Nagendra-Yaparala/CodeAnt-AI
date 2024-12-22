import React, { useState } from 'react'
import Heading from './Heading'
import Handles from './Handles'
import Icon from "../assets/Images/icon.png"
import Notfound from './Notfound'
import Secondhandle from './Secondhandle'

const Signup = () => {
  const [activeComponent,setActiveComponent] = useState('component1');
  const handleButtonClick = (component) =>{
    setActiveComponent(component);
  }
  return (
    <div className='bg-white border rounded-lg mt-16 md:mt-0   '>
       <div className=' p-4 md:p-4'>
        <div className='flex gap-2 items-center align-middle justify-center p-5'>
            <img src={Icon} alt="icon" />
            <h1>CodeAnt AI</h1>
        </div>
        <h1  className="font-bold text-3xl items-center align-middle flex justify-center">Welcome to CodeAnt AI</h1>
        <div className='flex  p-4 relative'>
            <button onClick={()=>handleButtonClick("component1")} className={`${activeComponent === "component1"?"bg-blue-700 text-white":"bg-white text-black"}  border rounded-md md:p-3  px-14 md:px-20 md:absolute cursor-pointer `}>SAAS</button>
            <button onClick={()=>handleButtonClick("component2")} className={`${activeComponent === "component2"?"bg-blue-700 text-white":"bg-white text-black"} border p-3 font-semibold rounded-md px-10 md:px-20 md:ml-40 cursor-pointer`}>Self Hosted</button>
        </div>
    </div>
        <hr className="my-4 border-gray-300" /> 
        {activeComponent === 'component1' ? <Handles/> : <Secondhandle/>}
    </div>
  )
}

export default Signup