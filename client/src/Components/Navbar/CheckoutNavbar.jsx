import React, {useState} from "react";
import {FaUserAlt} from "react-icons/fa";
import {AiOutlineArrowLeft} from "react-icons/ai";
const Navbar = () => {
return (
<>

<nav className="p-4 flex bg-white items-center w-full shadow-md lg:shadow-none">
<div className="container px-4 md:px-20 mx-auto">
<div className="flex w-full items-center justify-between "> 
<AiOutlineArrowLeft/>
<div className="w-24 ">
    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
         alt ="logo"  className="w-full h-full"/>
   
</div>
<div className="flex items-center relative gap-3">
<div className="border p-2 flex items-center gap-2 border-gray-500 text-zomato-400 rounded-full" > <FaUserAlt/>  </div>
Sruthi
</div>
</div>
</div>
</nav>
</>
);
};

export default Navbar;