import React, { useState } from 'react'
import AddReviewCard from '../../Components/Restaurant/Reviews/AddReviewCard';
//components
import ReviewCard from '../../Components/Restaurant/Reviews/ReviewCard'

const Reviews = () => {
    const [reviews , setReviews] = useState(["","",""]);

    return (
        <>
           <div className="w-full flex flex-col md:flex-row relative">
           <div className="w-full md:w-8/12  flex flex-col gap-3 ">
               <div className="md:hidden">
               <AddReviewCard/>
               </div>
           {reviews.map((review) => (
                <ReviewCard {...review}/>
            ))}
           </div>
           <aside
              style={{height:"fit-content"}}
              className="hidden md:flex flex-col md:w-4/12 ml-6 fixed items-start sticky top-2  rounded-xl shadow-xl  gap-3 bg-white p-4">
                   <AddReviewCard/>
           </aside>
           </div>
        </>
    )
}

export default Reviews
