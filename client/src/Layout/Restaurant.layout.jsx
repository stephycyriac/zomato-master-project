import React from 'react';


//components
import RestaurantNavbar from '../Components/Navbar/RestaurantNavbar';
import ImageGrid from '../Components/Restaurant/ImageGrid';

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
        </div>
       </>
    )
}

export default RestaurantLayout
