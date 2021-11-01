import React from 'react';
import {AiOutlineStar} from "react-icons/ai";
import {FaDirections} from "react-icons/fa";
import {BsBookmarkPlus} from "react-icons/bs";
import {RiShareForwardLine} from "react-icons/ri";
//components
import RestaurantNavbar from '../Components/Navbar/RestaurantNavbar';
import ImageGrid from '../Components/Restaurant/ImageGrid';
import InfoButtons from '../Components/Restaurant/InfoButtons';
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo';
import TabContainer from '../Components/Restaurant/Tabs';


const RestaurantLayout = (props) => {
    return (
       <>
       <RestaurantNavbar/>
        <div className="container mx-auto px-4 lg:px-20">
         <ImageGrid 
         images={ [
            "https://b.zmtcdn.com/data/pictures/chains/8/18232838/0774a9080ae378124162b1306b0f9dde.jpg?fit=around|300:273&crop=300:273;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/8/18232838/0774a9080ae378124162b1306b0f9dde.jpg?fit=around|300:273&crop=300:273;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/8/18232838/0774a9080ae378124162b1306b0f9dde.jpg?fit=around|300:273&crop=300:273;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/8/18232838/0774a9080ae378124162b1306b0f9dde.jpg?fit=around|300:273&crop=300:273;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/8/18232838/0774a9080ae378124162b1306b0f9dde.jpg?fit=around|300:273&crop=300:273;*,*",]}/>
              
                {/* Restaurant Details */}  
       <RestaurantInfo name="Magik Rollz - Gastrónut"
       restaurantRating="4.0"
       deliveryRating="4.2"
       cuisine="Rolls, Fast Food, Desserts, Beverages, Mexican"
       address="Gastronut, Panaji, Goa" />
              {/* ----------------info  button ----------------- */}
              <div className="my-4 flex flex-wrap gap-3">
         <InfoButtons isActive>
          <AiOutlineStar/> Add Review
         </InfoButtons>

         <InfoButtons>
          <FaDirections/> Direction
         </InfoButtons>

         <InfoButtons>
          <BsBookmarkPlus/>Bookmark
         </InfoButtons>


         <InfoButtons>
          <RiShareForwardLine/> Share
         </InfoButtons>
           </div >
          <div className="my-6">
          <TabContainer>
             </TabContainer>
          </div>
          {props.children}
        </div>
       </>
    )
}

export default RestaurantLayout;
