import React from 'react';
import DiningCarousel from './DiningCarousel';
//components

const Dining = () => {
    return (
        <>
           <div className="w-full">
           <DiningCarousel/> 
           <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">Dine-Out Restaurants in Bhubaneswar</h1>
           </div>
        </>
    )
}

export default Dining;
