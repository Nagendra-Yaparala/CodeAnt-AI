import React from "react";
import pie from "../assets/Images/ant-design_pie-chart-filled.png";
import small from "../assets/Images/small-right.png";

const Issue = () => {
  return (
    <div className=" hidden rounded-3xl shadow-[0_0_10px_rgba(0,0,0,0.25)] bg-white border border-[#E9EAEB] py-6 px-10 md:flex gap-6 h-40 absolute top-[58%] left-96 ">
      <div>
        <div className="rounded-full w-10 bg-[#9D90FA] bg-opacity-20 p-2">
          <img src={pie} alt="Pie chart" />
        </div>
        <div className="mt-3">
        <h1  className="font-bold text-md"> Issues Fixed</h1>
        <h1  className="font-bold text-4xl"> 500k+</h1>
        </div>
      </div>
      <div>
        <div className="flex">
            <img src={small} alt="" className="w-3 h-4 mt-2" />
            <p className="font-bold text-xl text-blue-600">14%</p>
        </div>
        <p className="text-sm text-gray-600">This week</p>
      </div>
    </div>
  );
};

export default Issue;
