import React from 'react'
import git from "../assets/Images/image 1.png";
import bitbucket from "../assets/Images/mmm.png";
import azure from '../assets/Images/Icon (1).png';
import gitlab from "../assets/Images/Icon (2).png"

const Secondhandle = () => {
    const Links = [
        
        {image:gitlab,
            Link:'Self Hosted GitLab'
        },
        {image:gitlab,
            Link:'Sign in with SSO'
        }
    ]
  return (
    <div className='flex flex-col gap-2 px-10 mb-10'>
        {Links.map((item,index)=>{
            return(
                <div className='border flex items-center ml-6 gap-2 justify-center shadow-md p-2 w-96 rounded-md cursor-pointer hover:bg-gray-200'>
                    <img src={item.image} alt="" />
                    <p className='font-semibold'>{item.Link}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Secondhandle
