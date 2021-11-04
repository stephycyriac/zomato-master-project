import React from 'react'
import {AiOutlineCompass} from "react-icons/ai"
//components
import FloatMenuBtn from '../../Components/Restaurant/Order-Online/FloatMenuBtn';
import FoodItem from '../../Components/Restaurant/Order-Online/FoodItem';
import FoodList from '../../Components/Restaurant/Order-Online/FoodList';
import MenuListContainer from '../../Components/Restaurant/Order-Online/MenuListContainer';

const OrderOnline = () => {
    return (
        <>
            <div className="w-full flex">
                <aside className="hidden md:flex flex-col border-r border-gray-200 overflow-y-scroll h-screen gap-3 w-1/4">
                <MenuListContainer/>
                <MenuListContainer/>
                <MenuListContainer/>
                
                </aside>
                <div className="w-full md:w-3/4 p-2 ">
                    <h2 className=" text-xl font-semibold ml-3">Order Online</h2>
                    <h4 className="flex items-center text-gray-600 gap-1 font-light ml-3"><AiOutlineCompass/>Live tracking not available</h4>
                    <section className="flex flex-col gap-3 md:gap-4 h-screen overflow-y-scroll">
                        <FoodList title="Recommended"
                        items={[
                            {
                                image:"https://b.zmtcdn.com/data/dish_photos/f3b/68853ca3fac35a5a7c76d74fc945ff3b.jpg?fit=around|130:130",
                               title:"6 pc Hot & Crispy Chicken",
                               price:"665.71",
                               description:"Save Rs. 147 & get 6pc signature Hot & crispy chicken [serves 2-3]",
                               rating:3,
                            },
                            {
                                image:"https://b.zmtcdn.com/data/dish_photos/f3b/68853ca3fac35a5a7c76d74fc945ff3b.jpg?fit=around|130:130",
                               title:"6 pc Hot & Crispy Chicken",
                               price:"665.71",
                               description:"Save Rs. 147 & get 6pc signature Hot & crispy chicken [serves 2-3]",
                               rating:3,
                            },
                            {
                                image:"https://b.zmtcdn.com/data/dish_photos/f3b/68853ca3fac35a5a7c76d74fc945ff3b.jpg?fit=around|130:130",
                               title:"6 pc Hot & Crispy Chicken",
                               price:"665.71",
                               description:"Save Rs. 147 & get 6pc signature Hot & crispy chicken [serves 2-3]",
                               rating:3,
                            },
                            {
                                image:"https://b.zmtcdn.com/data/dish_photos/f3b/68853ca3fac35a5a7c76d74fc945ff3b.jpg?fit=around|130:130",
                               title:"6 pc Hot & Crispy Chicken",
                               price:"665.71",
                               description:"Save Rs. 147 & get 6pc signature Hot & crispy chicken [serves 2-3]",
                               rating:3,
                            },
                           
                        ]}/>
                    </section>
                </div>
                <div>
                    
                </div>
            </div>
            <FloatMenuBtn/>

        </>
    )
}

export default OrderOnline
