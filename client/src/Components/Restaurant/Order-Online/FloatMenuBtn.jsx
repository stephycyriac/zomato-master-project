import React , {useState} from 'react'
import {BiMenu} from "react-icons/bi"
import {GrFormClose} from "react-icons/gr"

//components
import MenuListContainer from './MenuListContainer';

const FloatMenuBtn = () => {
    const [isClicked , setIsClicked] = useState(false);

    const toggleMenu = () =>  setIsClicked((prev) => !prev);
    return (
        <>
        <div className="fixed z-30 w-8/12 flex flex-col items-end gap-3 bottom-12 right-2 md:hidden">
         { isClicked && (
         <div className=" p-3 bg-white h-48 overflow-y-scroll">
           <MenuListContainer/>
         </div>
          )}
        <button onClick={toggleMenu} className="fixed bottom-2 z-30 right-2 md:hidden text-white bg-yellow-900 flex items-center gap-2 px-3 py-2 rounded-full ">
            { isClicked ? <GrFormClose/> : <BiMenu/>} Menu
            </button>
        </div>
        </>
    )
}

export default FloatMenuBtn
