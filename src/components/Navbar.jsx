import React from "react";
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <>
   
    <div className="w-[100%] h-18 items-center bg-[linear-gradient(120deg,_#030B1C,_#071A36,_#0B2D55)] flex ">
        <img className="w-20 h-12" src={logo} alt="" />
        <div className="flex justify-end w-[100%] items-center pr-10">
            <ul className="text-white flex justify-between gap-10">
                <li className=" box-border hover:border-2 border-solid rounded-full transition-all ease-in  px-3 py-1">Home</li>
                <li className="box-border hover:border-2 border-solid rounded-full transition-all ease-in  px-3 py-1">About Me</li>
                <li className="box-border hover:border-2 border-solid rounded-full transition-all ease-in  px-3 py-1">Skills</li>
                <li className="box-border hover:border-2 border-solid rounded-full transition-all ease-in  px-3 py-1">Projects</li>
                <li className="box-border hover:border-2 border-solid rounded-full transition-all ease-in  px-3 py-1">Contact</li>
            </ul>
        </div>
    </div>
    </>  
  );
}
//[#0B2D55]

export default Navbar