import React from 'react'
import { Link ,useParams } from 'react-router-dom';
import{IoMdArrowDropright , IoMdCopy} from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {FaDirections} from "react-icons/fa"
//components
import MenuCollection from '../../Components/Restaurant/MenuCollection';
import SimilarRestaurantCards from '../../Components/Restaurant/SimilarRestaurantCards';
import { NextArrow , PrevArrow} from '../../Components/CarouselArrow';
import ReviewCard from '../../Components/Restaurant/Reviews/ReviewCard';
import MapView from '../../Components/Restaurant/MapView';

const Overview = () => {

    const {id} = useParams();
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
         prevArrow:<PrevArrow/>
      };
      const ratingChanged = (newRating) => {
        console.log(newRating);
      };
     
    return (
        <>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-8/12 ">
                  <h2 className="text-lg md:text-2xl font-semibold mt-3">About this place</h2>
                  <div className="flex justify-between">
                      <h3 className="text-xl font-medium mt-3">Menu</h3>
                    <Link to={`/restaurant/${id}/menu`}>  
                    <h4 className="text-gray-600 flex items-center">See all menus<IoMdArrowDropright/></h4>
                    </Link>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-3 ">
                    <MenuCollection  
                    menuTitle="Menu" 
                    pages="6 pages"
                    image="https://b.zmtcdn.com/data/menus/838/18232838/d03b5cfa0ef3e67b843198715dd92f1f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"/>
                  </div>
                  <h3 className="text-xl font-medium mt-3">Cuisines</h3>
                  <div className="flex flex-wrap gap-3 my-6">
                      <span className="border border-gray-600 text-blue-600 px-6 py-2 rounded-full">Rolls</span>
                      <span className="border border-gray-600 text-blue-600 px-6 py-2 rounded-full">Fast Food</span>
                      <span className="border border-gray-600 text-blue-600 px-6 py-2 rounded-full">Desserts</span>
                      <span className="border border-gray-600 text-blue-600 px-6 py-2 rounded-full">Mexican</span>
                  </div>
                 <div>
                 <h3 className="text-xl font-medium ">Average Cost</h3>
                 <h4 className="text-lg  mt-3">₹500 for two people (approx.)</h4>
                 <small className="text-gray-600">Exclusive of applicable taxes and charges, if any</small>
                 </div>
                 {/* ------------------carousel part----------------------------- */}
                 <div className="my-4">
                 <h3 className="text-2xl font-medium mt-3">Similar Restaurants</h3>
                 </div>
                 <Slider {...settings}>
                 <SimilarRestaurantCards image="https://b.zmtcdn.com/data/pictures/chains/5/19154335/b4b2d98de0e7256c16e92729210994a0_featured_v2.jpg?output-format=webp" 
                 title="McCafe by McDonald's" /> 
                  <SimilarRestaurantCards image="https://b.zmtcdn.com/data/pictures/chains/5/19154335/b4b2d98de0e7256c16e92729210994a0_featured_v2.jpg?output-format=webp" 
                 title="McCafe by McDonald's" /> 
                  <SimilarRestaurantCards image="https://b.zmtcdn.com/data/pictures/chains/5/19154335/b4b2d98de0e7256c16e92729210994a0_featured_v2.jpg?output-format=webp" 
                 title="McCafe by McDonald's" /> 
                  <SimilarRestaurantCards image="https://b.zmtcdn.com/data/pictures/chains/5/19154335/b4b2d98de0e7256c16e92729210994a0_featured_v2.jpg?output-format=webp" 
                 title="McCafe by McDonald's" /> 
                  <SimilarRestaurantCards image="https://b.zmtcdn.com/data/pictures/chains/5/19154335/b4b2d98de0e7256c16e92729210994a0_featured_v2.jpg?output-format=webp" 
                 title="McCafe by McDonald's" /> 
                 </Slider>
                 {/* ---------------------------rating---------------------------- */}
                 <div className="my-4">
                 <h3 className="text-3xl mt-3">Rate your delivery experience</h3>
                 <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />,
                 </div>

                {/* ---------------------------map view for mobile devices---------------------------- */}
                 <div className="my-4 w-full md:hidden flex flex-col gap-4">
                 <MapView title="The Belgian Waffle Co." 
                 address="61/854-A6, Maneparambil Arcade, Ravipuram, Kochi" 
                 phno="+916235201753"
                  mapLocation={[9.9752141219388, 76.29515793941525]}/>  
                 </div>

                 {/* ---------------------------reviews---------------------------- */}
                 <div className="my-4 flex flex-col gap-4">
                 <ReviewCard/>
                 <ReviewCard/>
                 <ReviewCard/>
                 <ReviewCard/>
                 </div>
              </div>
                    {/* ---------------------------------------map---------------------------- */}
              <aside style={{height:"fit-content"}}
              className="hidden md:flex md:w-4/12 fixed  sticky top-2  rounded-xl shadow-xl flex flex-col gap-4">
                 <MapView title="The Belgian Waffle Co." 
                 address="61/854-A6, Maneparambil Arcade, Ravipuram, Kochi" 
                 phno="+916235201753"
                  mapLocation={[9.9752141219388, 76.29515793941525]}/>  
              </aside>
              
            </div>
        </>
    )
}

export default Overview
