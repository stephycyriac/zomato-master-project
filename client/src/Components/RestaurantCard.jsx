import React from 'react';
import {AiTwotoneStar} from "react-icons/ai";
const RestaurantCard = () => {
    return (
        <>
            <div className="bg-white p-2 w-full mb-20 rounded-2xl hover:shadow-lg transition duration-700 ease-in-outgit  md:w-1/2 lg:w-1/3">
                  <div className="w-full h-56 lg:h-64 relative ">
                     <div className="absolute flex items-end w-full bottom-3 justify-between">
                     <div className="flex flex-col gap-3 items-start">
                     <span className="bg-pink-600 text-white px-2 text-sm">Pro extra 10% OFF</span>
                      <span className="bg-blue-500 text-white px-2 text-sm"> 30% OFF</span>
                     </div>
                      <span className="bg-white bg-opacity-75 rounded-md p-1 mr-3 text-sm">29 min</span>
                     </div>
                      <img src="https://b.zmtcdn.com/data/pictures/0/19650970/7c99e430727a823c8f8acf03b3c04978_o2_featured_v2.jpg"
                      alt=" food" className="w-full h-full rounded-2xl"/>

                  </div>
                  <div classname="flex flex-col gap-3">
                      <div className="flex  items-center py-3 justify-between">
                          <h4 className="text-xl font-medium"> Akbar Fast Food </h4>
                          <span className="bg-green-600 text-white rounded-md p-1 mr-3 text-sm flex items-center ">3.9<AiTwotoneStar/></span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                          <p>South Indian </p>
                          <p>₹200 for one  </p>
                      </div>

                  </div>
            </div>
        </>
    )
}

export default RestaurantCard;
