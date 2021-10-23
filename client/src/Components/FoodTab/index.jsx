import React from 'react';
import {FiShoppingBag} from "react-icons/fi";
import {RiFootprintLine} from "react-icons/ri";
import {BiDrink} from "react-icons/bi";
import {IoNutritionOutline} from "react-icons/io5";


const MobileTab = () => {
 return(
<> 
<div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10  w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
<div className="flex flex-col text-xl items-center">
<FiShoppingBag/>
<h5 className="text-sm">Delivery</h5>
</div>
<div className="flex flex-col text-xl items-center">
<RiFootprintLine/>
<h5 className="text-sm">Dining Out</h5>
</div>
<div className="flex flex-col text-xl items-center">
<BiDrink/>
<h5 className="text-sm">Night Life</h5>
</div>
<div className="flex flex-col text-xl items-center">
<IoNutritionOutline/>
<h5 className="text-sm">Nutrition</h5>
</div>

</div>
</>
 );
};

const LargeTabs = () => {
return(
 <>
 <div className="md:hidden lg:flex container mx-auto px-20 gap-14">

{/* Delivery */}
<div className="flex items-center gap-3">
    <div className="w-14 h-14 bg-gray-200 rounded-full p-2">
        <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp" 
        alt="delivery"
        className="w-full h-full"
        />
    </div>
    <div> 
        <h3 className="text-xl text-gray-500 font-semibold"> Delivery</h3>
    </div>
</div>

{/* Dining Out */}
<div className="flex items-center gap-3">
    <div className="w-14 h-14 bg-gray-200 rounded-full p-2">
        <img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" 
        alt="Dining Out"
        className="w-full h-full"
        />
    </div>
    <div> 
        <h3 className="text-xl text-gray-500 font-semibold"> Dining Out</h3>
    </div>
</div>

{/* Nightlife */}
<div className="flex items-center gap-3">
    <div className="w-14 h-14 bg-gray-200 rounded-full p-2">
        <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" 
        alt="Nightlife"
        className="w-full h-full"
        />
    </div>
    <div> 
        <h3 className="text-xl text-gray-500 font-semibold">Nightlife</h3>
    </div>
</div>
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