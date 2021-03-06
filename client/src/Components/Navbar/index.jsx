import React, {useState} from "react";
import {FaUserAlt} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import {RiArrowDownSFill , RiArrowUpSFill} from "react-icons/ri";
import {BsSearch} from "react-icons/bs";


//components
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";


//mobile Nav
const MobileNav = ({ SignIn , SignUp}) => {
    const [isDropDownOpen , setIsDropDownOpen] = useState(false);
   
return(
<div className="flex w-full items-center justify-between  lg:hidden"> 
<div className="w-24 ">
    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
         alt ="logo"  className="w-full h-full"
    />
   
</div>
<div className="flex items-center relative gap-3">
    <button className="bg-zomato-400 text-white rounded-full py-1 px-1">
        Use App
    </button>
<span onClick ={() => setIsDropDownOpen((prev) => !prev )}
className="border p-2 border-gray-500 text-zomato-400 rounded-full">
        <FaUserAlt/>
    </span>
    { isDropDownOpen && (
            <div className="absolute z-10 shadow-lg p-3 rounded-lg  flex flex-col gap-2 bg-zomato-50 -bottom-16 -right-4 w-full">
    <button onClick={SignIn}> Sign In</button>
    <button onClick={SignUp}> Sign Up</button>
    </div>
        ) }
</div>
</div>

);
};

//Medium nav
const LargeNav = ({SignIn , SignUp}) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
return(
    <>
    <div className=" hidden lg:inline container px-20 mx-auto">
 <div className=" hidden w-full items-center lg:flex justify-between gap-3">
    <div className="w-32">
    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
         alt ="logo"  className="w-full h-full"/>
    </div> 
    <div className="w-3/4 bg-white shadow-md p-3 border border-gray-200 rounded-md flex items-center gap-3">
        <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-3"> 
        <span className="text-zomato-300"><HiLocationMarker/></span>
        <input type="text" placeholder="Kochi" className="focus:outline-none"/>
        <RiArrowDownSFill/>
    {/* <RiArrowUpSFill/> */}
        </div>
        <div className="flex items-center gap-3 w-full">
            <BsSearch/>
            <input type="search" placeholder="Search for restaurant,cuisine or a dish" className="focus:outline-none w-full"/>
        </div>
    </div>
    <div className=" ml-20 flex gap-4">
        <button onClick={SignIn} className="text-gray-500 text-xl hover:text-gray-700  ">Login</button>
        <button onClick={SignUp} className="text-gray-500 text-xl hover:text-gray-700">Signup</button>
    </div>
 </div>
 </div>
    </>
);
};

const Navbar = () => {
    const [openSignin , setOpenSignin] = useState(false);
    const [openSignup , setOpenSignup] = useState(false);
    const openSignInModal = () => setOpenSignin(true);
    const openSignUpmodal = () => setOpenSignup(true);
return (
<>
<SignIn isOpen={openSignin} setIsOpen={setOpenSignin}/>
<SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />

<nav className="p-4 flex bg-white items-center w-full shadow-md lg:shadow-none">
    <MobileNav SignIn = {openSignInModal} SignUp={openSignUpmodal} />
    <LargeNav SignIn = {openSignInModal} SignUp={openSignUpmodal} />
</nav>
</>
);
};

export default Navbar;