import React from 'react';
import Options from './Options';
import Signup from './Signup';
import Subtract from '../assets/Images/Subtract.png';
import Issue from './Issue';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen relative">
      <Issue  />
      
      
      <div className="left-side hidden md:flex w-1/2 items-center justify-center bg-white">
        <Options />
        <img 
          className="absolute bottom-0 left-0 w-60" 
          src={Subtract} 
          alt="Subtract" 
        />
      </div>

      <div className="right-side w-full md:w-1/2 bg-gray-100 text-gray-800 flex items-center justify-center flex-col">
        <Signup />
        <p className='m-2'>By signing up you agree to the<span className='font-bold'> Privacy Policy</span>.</p>
      </div>
    </div>
  );
};

export default Home;
