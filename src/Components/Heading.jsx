import React from 'react'
import Icon from "../assets/Images/icon.png"

const Heading = () => {
  return (
    <div className='p-4'>
        <div className='flex gap-2 items-center align-middle justify-center p-5'>
            <img src={Icon} alt="" />
            <h1>CodeAnt AI</h1>
        </div>
        <h1  className="font-bold text-3xl items-center align-middle flex justify-center">Welcome to CodeAnt AI</h1>
        <div className='flex  p-4 relative'>
            <button className='bg-blue-700 text-white border rounded-md p-3 px-20 absolute cursor-pointer '>SAAS</button>
            <button className='bg-white text-black border p-3 font-semibold rounded-md px-20 ml-40 cursor-pointer'>Self Hosted</button>
        </div>
    </div>
  )
}

export default Heading