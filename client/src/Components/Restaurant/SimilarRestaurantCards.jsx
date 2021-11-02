import React from 'react'
import {AiTwotoneStar} from "react-icons/ai";
const SimilarRestaurantCards = (props) => {
    return (
        <>
              <div className="mx-2">
              <div className="bg-white shadow rounded-lg ">
                 <div className="w-full h-24 md:h-48">
                    <img src={props.image}
                         alt="food- chicken"
                         className="w-full h-full rounded-t-lg"/>
                  </div>
                  <div className=" flex flex-col gap-2 p-3">
                      <h3 className="text-sm  my-2 text-center font-light object-cover">{props.title}</h3>
                      <div className="flex items-center text-sm justify-between gap-2">
                          <span className="flex items-center gap-1 pr-2 ">
                          <span className="bg-green-600 text-white rounded-md p-1 mr-3 text-sm flex items-center ">
                             3.3 <AiTwotoneStar/>
                              </span>
                              Dining
                          </span>
                          <span className="border-r w-2 h-4 border-gray-400"/>
                          <span className="flex items-center border-r-1 gap-1 pr-2 border-gray-400">
                          <span className="bg-green-600 text-white rounded-md p-1 mr-3 text-sm flex items-center ">
                             4.0 <AiTwotoneStar/>
                              </span>
                              Delivery
                          </span>
                      </div>
                      <h4>Fast Food, Beverages</h4>
                  </div>
           </div> 
              </div>
        </>
    )
}

export default SimilarRestaurantCards
