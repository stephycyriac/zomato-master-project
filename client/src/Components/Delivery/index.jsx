import React,{useState} from 'react';

//components
import DeliveryCarousel from './DeliveryCarousel';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';


const Delivery = () => {
    const [restaurantList , setRestaurantList ] = useState([
        {
            _id:"12345",
            photos:["https://b.zmtcdn.com/data/pictures/1/2900231/1588ab7f544d4433e6f476a7469e217e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
            name:"Domino's Pizza",
            cuisine:["Pizza" ,"Fast Food"],
            averageCost:200,
            isPro:true,
            isOff:80,
            RestaurantreviewValue:4.4,
            durationOfDelivery:"30min",
        },
        {
            _id:"5785",
            photos:["https://b.zmtcdn.com/data/pictures/7/18752947/fa116d1ea821dbf2d1870a4a64b38886.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
            name:"Manomay",
            cuisine:["Mithai", "Chinese", "Street Food", "North Indian", "Fast Food", "South Indian"],
            averageCost:150,
            RestaurantreviewValue:4.2,
            durationOfDelivery:"32min",
        },
        {
            _id:"987654",
            photos:["https://b.zmtcdn.com/data/pictures/5/2900405/3218168b9e8dddebe3f1dad5a6e89b20.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
            name:"Green Chillyz",
            cuisine:["Biryani", "Chinese", "Kebab"],
            averageCost:150,
            isPro:true,
            isOff:60,
            RestaurantreviewValue:4.0,
            durationOfDelivery:"25min",
        },
    ]);
    return (
        <> 
        <DeliveryCarousel/>
        {/* <Brand/> */}
       <div className="flex flex-wrap justify-between">
     {restaurantList.map((restaurant) => (
         <RestaurantCard {...restaurant} key={restaurant._id}/>
     ))}
       </div>
        </>
    );
};
export default Delivery;