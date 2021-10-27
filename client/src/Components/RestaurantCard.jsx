import React from 'react';
import {AiTwotoneStar} from "react-icons/ai";
const RestaurantCard = (props) => {
    return (
        <>
            <div className="bg-white p-4 w-full mb-4 rounded-2xl hover:shadow-lg transition duration-700 ease-in-outgit   md:w-1/2 lg:w-1/3">
                  <div className="w-full h-56 lg:h-64 relative ">
                     <div className="absolute flex items-end w-full bottom-3 justify-between">
                     <div className="flex flex-col gap-3 items-start">
                   { props.isPro && ( <span className="bg-pink-600 text-white px-2 text-sm">Pro extra 10% OFF</span>) }
                    { props.isPro && (  <span className="bg-blue-500 text-white px-2 text-sm">₹{`${props.isOff}`} OFF</span>) }
                     </div>
                      <span className="bg-white bg-opacity-75 rounded-md p-1 mr-3 text-sm">{props.durationOfDelivery}</span>
                     </div>
                      <img src={props.photos.length && props.photos[0]}
                      alt=" food" className="w-full h-full rounded-2xl"/>

                  </div>
                  <div classname="flex flex-col gap-3">
                      <div className="flex  items-center py-3 justify-between">
                          <h4 className="text-xl font-medium">{props.name}</h4>
                          <span className="bg-green-600 text-white rounded-md p-1 mr-3 text-sm flex items-center ">{props.RestaurantreviewValue}<AiTwotoneStar/></span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                          <p>{props.cuisine.join(", ")}</p>
                          <p>₹{props.averageCost} for one  </p>
                      </div>

                  </div>
            </div>
        </>
    )
}

export default RestaurantCard;
