import React from 'react';
import NightLifeCarousel from './NightLifeCarousel';
//components

const NightLife = () => {
    return (
        <>
           <div className="w-full">
           <NightLifeCarousel/> 
           <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">Nightlife Restaurants in Bhubaneswar</h1>
           </div>
        </>
    )
}

export default NightLife;
