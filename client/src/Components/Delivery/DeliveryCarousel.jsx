import React from 'react'
import Slider from "react-slick";  
//components
import DeliveryCategory from './DeliveryCategory';
import { NextArrow , PrevArrow} from '../CarouselArrow';


const DeliveryCarousel = () => {
const categories = [
    {
        image:"https://b.zmtcdn.com/data/dish_images/2a24c5264606bd78622267d28a3726821634805216.png",
        title:"Biriyani",
    },
    {
        image:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
        title:"Rolls",
    },
    {
        image:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        title:"Burger",
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        title:"Pizza",
    },
    {
        image:"https://b.zmtcdn.com/data/homepage_dish_data/4/4e026537a7d32360c5a22b7cb2e7f61a.png",
        title:"Mushroom",
    },
    {
        image:"https://b.zmtcdn.com/data/dish_images/0d37e90e4ea238490f562405cf444a8e1634731539.png",
        title:"Chaat",
    },
   
];
const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
     prevArrow:<PrevArrow/>
  };

    return (
        <>
        <h1 className="text-xl font-semibold">Eat what makes you happy</h1>
        <div className="lg:hidden flex gap-3 flex-wrap justify-evenly">
        {
            categories.map((food) => (
            <DeliveryCategory {...food }/>
        ))}
        </div>

{/* carousel for pc screen  */}
        <div className="hidden lg:block">
<Slider {...settings}>
{
            categories.map((food) => (
            <DeliveryCategory {...food }/>
        ))}
</Slider>
        </div>
        </>
       
    );
};
export default DeliveryCarousel;
