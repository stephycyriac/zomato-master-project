import React ,{useState, useEffect }from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import {FiShoppingBag} from "react-icons/fi";
import {RiFootprintLine} from "react-icons/ri";
import {BiDrink} from "react-icons/bi";
import {IoNutritionOutline} from "react-icons/io5";
import classnames from "classnames";


const MobileTab = () => {
    const [allTypes , setAllTypes] = useState([
     {
         id:`delivery`,
         icon :<FiShoppingBag/>,
         name:"Delivery",
        
     },
     {
        id:`dining`,
        icon :<RiFootprintLine/>,
        name:"Dining Out",
    },
    {
        id:`night`,
        icon :<BiDrink/>,
        name:"Night Life",
    },
    {
        id:`nutrition`,
        icon :<IoNutritionOutline/>,
        name:"Nutrition",
    },
    ]);
    const {type} = useParams();

  
 return(
<> 
<div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10  w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
{
    allTypes.map((items) => (
        <Link to ={`${items.id}`}>
          <div className={ 
              type=== items.id
                 ? "flex flex-col relative text-xl items-center text-zomato-400" 
                 :  "flex flex-col text-xl items-center "       }>
    <div className={type=== items.id && "absolute  -top-3 w-full h-2 border-t-2 border-zomato-400"}/>                                   
        {items.icon}
          <h5 className="text-sm">{items.name}</h5>
             </div>
        </Link>
    ))}

</div>
</> 
 );
};

const LargeTabs = () => {
    const [allTypes , setAllTypes] = useState([
        {
            id:`delivery`,
            imageDefault:"https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp",
            imageActive:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
            name:"Delivery",
            activeColor:"yellow ",
           
        },
        {
           id:`dining`,
           imageDefault:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
           imageActive:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
           name:"Dining Out",
           activeColor:" blue ",
       },
       {
           id:`night`,
           imageDefault:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
            imageActive:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
           name:"Night Life",
           activeColor:"purple ",
       },
       ]);

       const {type} = useParams(); 
return(
 <>
 <div className="hidden lg:flex container mx-auto px-20 my-8 gap-14">
{allTypes.map((items) => (
    <Link to = {`/${items.id}`}>
<div  className={classnames("flex items-center gap-3 pb-2 transition duration-700 ease-in-out" ,
{
    "border-b-4 border-zomato-400" : type === items.id,
}
)}>
    <div className={classnames("w-14 h-14 bg-gray-100 rounded-full p-2" , {
        [`bg-${items.activeColor}-100`]:type===items.id
    })}>
        <img src={type===items.id? items.imageActive: items.imageDefault}
        alt="delivery"
        className="w-full h-full"
        />
    </div>
   
        <h3 className={type===items.id ? "text-xl text-zomato-400" : "text-xl text-gray-700"}> {items.name}</h3>
  </div>  
  </Link>
))}
 </div>  
 </>
);
};

 const FoodTab = () => {
    return (
        <>
            <div>
                <MobileTab/>
                <LargeTabs/>
            </div>

        </>
    );
};
export default FoodTab;