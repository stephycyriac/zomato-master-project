import React, {useState} from "react"
import {IoMdArrowDropdown , IoMdArrowDropup ,IoMdArrowDropright , IoMdClose} from "react-icons/io";


//components
import FoodItem from "./FoodItem";

const CartSM = ({toggle}) => {
    return(
        <>
        <div className="md:hidden flex items-center justify-between p-2 m-2">
        <div className="flex flex-col  items-start text-gray-500 ">
                    <h4 className="flex items-center gap-2" onClick={toggle}>
                        1 ITEM <IoMdArrowDropup/></h4>
                        <div className="items-center">
                            <h4>₹300 (plus tax)</h4>
                            </div>
                </div>
                    <button className="bg-zomato-400 flex items-center text-white px-5 py-2 rounded-lg  ">
                        Continue <IoMdArrowDropright/>
                    </button>
        </div>
        </>
    )
}
const CartLg = ({toggle}) => {
    return(
        <>
        <div className="hidden md:flex items-center w-full justify-between container px-24 mx-auto py-3">
        <div className="flex flex-col  items-start text-black gap-1 ">
                    <h4 className="flex items-center gap-2 text-lg font-semibold ">
                    <span className="border bg-white border-gray-300 p-1 rounded-md" onClick={toggle}><IoMdArrowDropup/> </span>Your Order(1) </h4>    
         </div>
                <div className="flex items-center gap-2 ">
                 <div className="items-center text-black font-semibold">
                            <h4>Subtotal:₹300</h4>
                            </div>
                    <button className="bg-zomato-400 flex items-center text-white px-6 py-2 rounded-lg  ">
                        Continue <IoMdArrowDropright/>
                    </button>
                </div>
               </div>
        </>
    )
}

const CartContainer = () => {
   const [isOpen , setIsOpen] = useState(false);
   const toggleCart = () => setIsOpen((prev) => !prev);
   const closeCart = () => setIsOpen(false)
    return (
        <>
           {isOpen && (
                  <div  className="fixed bottom-16 w-full h-48 overflow-y-scroll  bg-white z-10 px-3 p-2 ">
            <div className="flex items-center justify-between text-lg font-semibold ">
                <h4>Your Orders </h4>
                <IoMdClose onClick={closeCart} className="text-semibold"/>
            </div>
            <hr className="my-2 border border-gray-300"/>
            <div className="flex flex-col gap-2">
             <FoodItem name="Kaju Burfi" quantity="1" price="210"/>
            </div>
        </div>

           )}
            <div className="fixed bottom-0 w-full px-3  bg-white z-10 ">
               <CartSM toggleCart={toggleCart}/>
               <CartLg toggleCart={toggleCart}/>
            </div>
        </>
    )
}

export default CartContainer
