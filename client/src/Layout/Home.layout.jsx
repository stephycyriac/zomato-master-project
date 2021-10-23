import React from "react";
import FoodTab from "../Components/FoodTab";


//components
import Navbar from "../Components/Navbar"; 

const HomeLayout = (props) => {
return (
<>
<Navbar/>  
<div className="container mx-auto px-4 lg:px-20">{props.children}</div>
<FoodTab/>
</>
);
}; 

export default HomeLayout;