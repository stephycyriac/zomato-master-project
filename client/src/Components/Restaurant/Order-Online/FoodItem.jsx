import React from 'react'
import ReactStars from "react-rating-stars-component"
const FoodItem = (props) => {
    return (
        <>
            
                <div className="flex items-start gap-2 justify-between p-3"> 
                <div className="w-3/12 h-24 md:h-28 lg:h-36 md:px-3">
                    <img src={props.image}
                     alt="Food Image" 
                     className="w-full h-full rounded-lg" />
                    </div>
                <div className="w-3/4 md:w-7/12 flex flex-col md:gap-1"> 
                    <div className="flex items-center justify-between">
                    <h3 className="text-sm md:text-xl text-semibold">{props.title}</h3>
                    <button className="md:hidden border border-zomato-400 bg-zomato-50 rounded-lg text-zomato-400 text-sm px-2 py-1 text-normal">ADD+ </button>
                    </div>
                    <ReactStars count={5} value={props.rating}/>
                    <h5 className="text-gray-500 text-sm">₹{props.price}</h5>
                    <p className="truncate text-gray-500 text-sm">
                        {props.description}
                     </p>
                    </div>
                <div className="hidden md:block w-2/12">
                <button className="border border-zomato-400 bg-zomato-50 rounded-lg text-zomato-400 text-sm px-3 py-2 text-normal">ADD+ </button>
                </div>
            </div>
        </>
    )
}

export default FoodItem
