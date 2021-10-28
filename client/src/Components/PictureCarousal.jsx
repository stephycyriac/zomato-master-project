import React from 'react';
import{IoMdArrowDropright} from "react-icons/io";
const PictureCarousalCard = () => {
    return (
       <>
        <div className="w-full h-64 relative">
         <div  className="w-full h-full">
         <img src="https://b.zmtcdn.com/data/pictures/9/19449699/4f5a87229ce08a695e9990d484d549be_featured_v2.jpg?output-format=webp"
            alt="food"
            className="w-full h-full"/>
         </div>
         <div 
         
         style={{background:linear-gradient( 0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)}}/>
            <div className="absolute bottom-0 text-white font-medium">
                <h4>Trending This Week</h4>
                <h6 className="flex items-center">30 Places <IoMdArrowDropright/></h6>
            </div>
            </div>
       </>
    );
};

export default PictureCarousalCard;
