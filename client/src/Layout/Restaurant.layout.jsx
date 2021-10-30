import React from 'react';

//components
import RestaurantNavbar from '../Components/Navbar/RestaurantNavbar';
import ImageGrid from '../Components/Restaurant/ImageGrid';
import InfoButtons from '../Components/Restaurant/InfoButtons';
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo';

const RestaurantLayout = () => {
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
           <InfoButtons/>
        </div>
       </>
    )
}

export default RestaurantLayout
