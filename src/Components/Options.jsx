import React from 'react';
import Subtract from "../assets/Images/icon.png"

const Options = () => {
  const options = [
    { value: '30+', text: 'Language Support' },
    { value: '10k+', text: 'Developers' },
    { value: '100k+', text: 'Hours Saved' },
  ];

  return (
    <div className="rounded-3xl shadow-lg border border-[#E9EAEB] py-6 ">
      <h1 className="font-bold text-xl flex text-center align-middle px-10"><img className='mr-2' src={Subtract} alt="" />    AI to Detect & Autofix Bad Code</h1>
      <hr className="my-4 border-gray-300 p-0" /> 
      <div className="flex gap-8 px-10">
        {options.map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl font-bold">{item.value}</div>
            <div className="text-sm text-gray-600">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
