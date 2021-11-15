import React from 'react'
import { BsShieldLockFill } from "react-icons/bs";
//components
import FoodItem from '../../Components/Cart/FoodItem';
import AddressList from '../../Components/Checkout/AddressList';


const Checkout = () => {
  const address = [
    {
       name:"Home",
       address:"India",
    },
    {
        name:"Gym",
        address:"India",
     },
     {
        name:"Office",
        address:"India",
     },
];
    return (
        // <div className=" my-3  flex flex-col gap-2 items-center w-full">
        //      <h1 className="text-xl text-center md:text-2xl font-bold ">Checkout</h1>
        //      <div className="w-full  rounded-lg shadow-lg bg-white py-3 flex flex-col items-center ">
        //          <h3 className="font-semibold">Summary</h3>
        //          <div className="flex flex-col items-center gap-2">
        //               <h4 className="text-base tracking-wider">ORDER FROM </h4>
        //             <div className="flex flex-col items-center text-gray-600 w-full">
        //             <h5>A2B- Adyar Ananda Bhavan</h5>
        //               <small>Elk Hill, Ooty</small>
        //             </div>
        //             <div className=" flex flex-col  gap-2 w-full ">
        //               <FoodItem name="Pizza" quantity={3} price={150}/>
        //               <FoodItem name="Pizza" quantity={3} price={150}/>
        //               <FoodItem name="Pizza" quantity={3} price={150}/>
        //             </div>
        //             <div className="  flex flex-col  gap-3 w-full ">
        //              <h4 className="text-xl font-semibold">Choose Address</h4>
        //                 <AddressList address={address}/>
        //             </div>
        //             <button className=" my-4 md:my-8 w-full px-4   h-14 font-medium text-white text-lg bg-zomato-400 rounded-lg">
        //            Pay Now
        //          </button>
        //          </div>
              
        //      </div>

        // </div>
        <div className="my-3 flex flex-col gap-3 items-center">
        <h1 className="text-xl text-center md:text-2xl font-bold">Checkout</h1>
        <div className="w-full md:w-3/5 rounded-lg  py-3 shadow-lg bg-white flex flex-col items-center">
          <h3 className="text-lg font-semibold">Summary</h3>
          <div className="flex w-full  flex-col gap-2 items-center">
            <h5 className="text-base tracking-wider">ORDER FROM</h5>
            <div className="flex w-full  flex-col items-center text-gray-400">
              <h4>Domino's Pizza</h4>
              <small>GT World Mall, Magadi Road, Bangalore</small>
            </div>
            <div className="my-3  px-4 flex flex-col gap-2 w-full md:w-3/5 ">
              <FoodItem name="Pizza" quantity={3} price={300} />
              <FoodItem name="Pizza" quantity={3} price={300} />
              <FoodItem name="Pizza" quantity={3} price={300} />
            </div>
            <div className="flex flex-col gap-3 w-full my-4 md:w-3/5 ">
              <h4 className="text-xl font-semibold">Choose Address</h4>
              <AddressList address={address} />
            </div>
          </div>
          <button className="flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 px-0 h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg">
            Pay Securely <BsShieldLockFill />
          </button>
        </div>
      </div>
    )
}

export default Checkout;
