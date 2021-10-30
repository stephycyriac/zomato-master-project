import React from 'react'
import {AiTwotoneStar} from "react-icons/ai";
const RestaurantInfo = (props ) => {
    return (
        <>
           {/* Restaurant Details */}
       <div className="my-4">

     <div className="flex flex-col flex-col-reverse md:flex-row md:items-center  justify-between gap-3 ">
     <h1 className="text-xl font-semibold md:text-4xl md:font-normal">{props.name}</h1> 

   <div >
      <div className="flex items-center gap-5 text-xs md:text-base" >
             {/* ---------------dining review------------------- */}
       <div className="flex items-center " >       
      <span className="bg-green-600 text-white rounded-md p-1 mr-3 text-sm flex items-center">
           {props.restaurantRating}<AiTwotoneStar/>
      </span>
      <span>
          <strong>145</strong>
          <p className="border-dashed border-b">Dining Reviews</p>
      </span>
       </div>
       {/* ---------------delivery review------------------- */}
       <div className="flex items-center ">  
      <span className="bg-green-600 text-white rounded-md p-1 mr-3 text-sm flex items-center">
      {props.deliveryRating}<AiTwotoneStar/>
      </span>
      <span>
          <strong>803</strong>
          <p className="border-dashed border-b">Delivery Reviews</p>
      </span>
       </div>
      </div>


   </div>
 </div>
{/* -------------------------restaurant details--------------- */}
<div className=" text-base lg:text-xl text-gray-600 text-lg">
        <h4>{props.cuisine}</h4>
        <h4 className="text-gray-400">{props.address}</h4>
        <h4><span className="text-yellow-500">Open now </span>  9am – 1am (Today)</h4>
   </div>

</div>
        </>
    );
};
export default RestaurantInfo
