import React from 'react'
import refresh from '../assets/Images/refresh.png'
import plus from '../assets/Images/plus.png'
import database from '../assets/Images/database (1).png'
import { data } from 'react-router-dom'
import search from '../assets/Images/search.png'

const Design = ({DahboardItems,title}) => {
  return (
    <div className=' bg-white py-1 rounded-md border ml-1 md:border md:shadow-sm flex flex-col gap-1 mt-14 md:mt-0 justify-center w-full  '>
    <div className='md:flex md:justify-between md:gap-[650px] py-1 px-2 md:px-4'>
    <div className='flex flex-col gap-2 relative'>
        <h1 className='font-semibold text-2xl'>{title}</h1>
        <p>33 total {title}</p>
        <div className='hidden md:flex'>
        <img className='w-4 h-4 absolute bottom-2 left-2' src={search} alt="" />
        <input type="text" placeholder={`Search ${title}`} className='p-1 px-6 border rounded-lg outline-none shadow-sm placeholder:p-3'  />
        </div>
    </div>
    <div className=''>
       <div className='flex gap-2'>
       <button className='border px-3 md:px-10 py-1 rounded-lg shadow-sm flex justify-center items-center gap-2'><img src={refresh} alt="refresh" />Refresh All</button>
       <button className='border px-3 md:px-3 py-2 rounded-lg shadow-sm bg-blue-600 text-white flex items-center justify-center gap-2 '><img src={plus} alt="plus " /> Add {title} </button>
       </div>
       <div className='flex md:hidden relative top-2 py-1'>
        <img className='w-4 h-4 absolute bottom-4 left-2' src={search} alt="" />
        <input type="text" placeholder={`Search ${title}`}  className='p-2 w-full border rounded-lg outline-none shadow-sm placeholder:px-6'  />
        </div>
       <div>    
       </div>
    </div>
    </div>
    <div className=''>
        {DahboardItems.map((items,index)=>{
            return(<div key={index} className=' py-4 px-4 border-t border-b w-full flex flex-col gap-1 hover:bg-slate-200 cursor-pointer'>
                <div className='flex gap-4 items-center'>
                <h1 className='font-semibold text-lg'>{items.title}</h1>
                <span className='border bg-blue-100 rounded-full px-3 py-0 text-sm text-blue-600 border-blue-300'>{items.privacy}</span>
                </div>
                <div className='flex gap-5'>
                    <div className='flex gap-2 items-center align-middle justify-center'>
                        <p>{items.tech}</p>
                        <span className='rounded-full bg-blue-700 h-2 w-2 mt-1'></span>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                        <img src={database} alt="" />
                    <p>{items.size}</p>
                    </div>
                    <p>{items.updated_time}</p>

                </div>
            </div>)
        })}
    </div>
</div>
  )
}

export default Design