import React from 'react'
import {AiTwotoneStar} from "react-icons/ai";
const ReviewCard = () => {
    return (
        <>
            <div className="flex flex-col gap-3 my-3">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                   <div className="w-10 h-10 rounded-full">
                        <img src="https://b.zmtcdn.com/data/user_profile_pictures/358/23600e5ce9cb9e2644edc4e901fe4358.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                            alt="avatar"
                            className="w-full h-full rounded-full object-cover"/>
                    </div >
                    <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-semibold">Sanjana Kakodkar</h3>
                        <small className="text-gray-500">1 Reviews &#8226; 1 Followers</small>
                    </div>
                   </div>
                    <button className="border border-zomato-400 text-zomato-400 py-2 px-3 rounded-lg">Follow</button>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-2 items-center">
                    <span className="bg-green-600 text-white rounded-md p-1 mr-3 text-sm flex items-center ">
                    4 <AiTwotoneStar/>
                     </span>
                     <h5 className="font-light">DELIVERY</h5>
                     <h5 className="text-sm text-gray-500">6 days ago</h5>
                    </div>
                    <div className="w-full">
                        <p className="text-gray-500 font-light w-full text-base">The restaurant dint send any mint chutney inspite of instructions</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ReviewCard
