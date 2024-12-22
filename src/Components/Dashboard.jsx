import React, { useState } from 'react';
import Icon from '../assets/Images/icon.png';
import key from '../assets/Images/key.png';
import downA from '../assets/Images/chevron-down (2).png';
import plus from '../assets/Images/plus.png';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import home from '../assets/Images/home (1).png'
import code from '../assets/Images/code.png'
import cloud from '../assets/Images/cloud.png'
import book from '../assets/Images/book.png'
import gear from '../assets/Images/gear.png'
import refresh from '../assets/Images/refresh.png'
import phone from '../assets/Images/phone.png'
import signout from '../assets/Images/sign-out.png'
import bars from '../assets/Images/bars.png'
import close from '../assets/Images/close (1).png'


const Dashboard = () => {
  const [optionItem, setOptionItem] = useState('Repositories');
  const [dropDown,setDropDown] = useState(0);
  const navigate = useNavigate();
  const Options = [
    {
      icon: home,
      text: 'Repositories',
      path: 'repositories',
    },
    {
      icon: code,
      text: 'AI Code Review',
      path: 'codereview',
    },
    {
      icon: cloud,
      text: 'Cloud Security',
      path: 'cloudsecurity',
    },
    {
      icon: book,
      text: 'How to Use',
      path: 'howtouse',
    },
    {
      icon: gear,
      text: 'Settings',
      path: 'settings',
    },
  ];

  const handleClick = (path) => {
    setOptionItem(path); 
  };
  const handleDropdown = (flag)=>{
    setDropDown(flag);
  }
  const handleLogout = ()=>{
    navigate('/');
  }

  return (
    <div className="flex gap-4">
      <div className="hidden md:flex flex-col justify-between h-screen w-60 bg-gray-50 border">
        <div>
          <div className="flex gap-2 items-center align-middle justify-start p-5">
            <img src={Icon} alt="Logo" />
            <h1 className="text-3xl">CodeAnt AI</h1>
          </div>
          <div className="px-5">
            <select
              className="p-1 px-8 border rounded-lg items-center text-left focus:outline-none"
              name="UtkarshDhair"
              id="utkarsh"
            >
              <option className="text-start" value="1">
                UtkarshDhairpa...
              </option>
              <option className="text-start" value="1">
                UtkarshDhairpa...
              </option>
              <option className="text-start" value="1">
                UtkarshDhairpa...
              </option>
            </select>
          </div>
          <div className="px-5 py-2 flex flex-col gap-2">
            {Options.map((item, index) => {
              return (
                <Link to={`/dashboard/${item.path}`} key={index}>
                  <div
                    onClick={() => handleClick(item.path)}
                    className={`flex gap-2 items-center justify-start p-3 py-2 hover:bg-blue-600 hover:text-white rounded-lg cursor-pointer ${
                      optionItem === item.path ? 'bg-blue-600 text-white' : ''
                    }`}
                  >
                    <img className="text-black" src={item.icon} alt="" />
                    <h1 className="font-semibold">{item.text}</h1>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="px-5">
          <div className="flex gap-2 items-center justify-start p-3 py-2 hover:bg-blue-600 rounded-lg cursor-pointer hover:text-white">
            <img className="text-black" src={phone} alt="" />
            <h1 className="font-semibold">Support</h1>
          </div>
          <div className="flex gap-2 items-center justify-start p-3 py-2 hover:bg-blue-600 rounded-lg cursor-pointer hover:text-white">
            <img className="text-black" src={signout} alt="" />
            <h1 className="font-semibold" onClick={()=>handleLogout()}>Logout</h1>
          </div>
        </div>
      </div>




     





      <div className=" md:p-4">
      <div className=' md:hidden'>
      <div className="flex flex-col   bg-gray-50 border fixed w-full z-50">
        <div>
          <div className='flex justify-between p-2 items-center '>
          <div className="flex gap-2 items-center align-middle justify-start ">
            <img src={Icon} alt="Logo" />
            <h1 className="text-3xl">CodeAnt AI</h1>
          </div>
          <img className={`${dropDown === 0 ?'':'hidden'} w-5 h-5`} onClick={()=>handleDropdown(1)} src={bars} alt="" />
          <img className={`${dropDown === 1 ?'':'hidden'}`} onClick={()=>handleDropdown(0)} src={close} alt="" />
          </div>
        <div className={`${dropDown === 1 ?`absolute z-10 bg-gray-100 w-full`:`hidden` }`}>
            <div className="px-3">
            <select
              className="p-1 mt-2 w-full border rounded-lg items-center text-left focus:outline-none"
              name="UtkarshDhair"
              id="utkarsh"
            >
              <option className="text-start" value="1">
                UtkarshDhairpa...
              </option>
              <option className="text-start" value="1">
                UtkarshDhairpa...
              </option>
              <option className="text-start" value="1">
                UtkarshDhairpa...
              </option>
            </select>
          </div>
          <div className="px-2 py-2 flex flex-col gap-2">
            {Options.map((item, index) => {
              return (
                <Link to={`/dashboard/${item.path}`} key={index}>
                  <div
                    onClick={() => handleClick(item.path)}
                    className={`flex gap-2 items-center justify-start p-3 py-2 hover:bg-blue-600 hover:text-white rounded-lg cursor-pointer ${
                      optionItem === item.path ? 'bg-blue-600 text-white' : ''
                    }`}
                  >
                    <img className="text-black" src={item.icon} alt="" />
                    <h1 className="font-semibold">{item.text}</h1>
                  </div>
                </Link>
              );
            })}
            <div className="flex gap-2 items-center justify-start  p-3 py-2 hover:bg-blue-600 hover:text-white rounded-lg cursor-pointer">
            <img className="text-black" src={phone} alt="" />
            <h1 className="font-semibold">Support</h1>
          </div>
          <div className="flex gap-2 items-center justify-start   p-3 py-2 hover:bg-blue-600 hover:text-white rounded-lg cursor-pointer">
            <img className="text-black" src={signout} alt="" />
            <h1 className="font-semibold" onClick={()=>handleLogout()}>Logout</h1>
          </div> 
          </div>
          
        </div>
        </div>
        
      </div>
      </div>



        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
