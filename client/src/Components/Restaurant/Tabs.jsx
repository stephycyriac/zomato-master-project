import React from 'react';
import clasnames from "classnames";
import {useLocation} from "react-router-dom";
const Tab = (props) => {
    return(
        <>
        <div className={clasnames("text-gray-500 font-medium", {
            "text-zomato-400 font-semibold":props.isActive ,
        })}>
            <h3>{props.title}</h3>
        </div>
        </>
    );
};

const TabContainer= (props) => {
    const location = useLocation();

    const currentPath = location.pathname;

    const tabs = [
        {
            title:"Overview",
            route:"overview",
            isActive:currentPath.includes("overview"),
        },
        {
            title:"Order Online",
            route:"order-online",
            isActive:currentPath.includes("order-online"),
        },
        {
            title:"Reviews",
            route:"reviews",
            isActive:currentPath.includes("reviews"),
        },
        {
            title:"Photos",
            route:"photos",
            isActive:currentPath.includes("photos"),
        },
        {
            title:"menu",
            route:"menu",
            isActive:currentPath.includes("menu"),
        },
    ];
    return (
        <>
            <div className="flex items-center gap-3 md:gap-4 overflow-x-scroll">
                {tabs.map((tab) => (
                    <Tab {...tab} key={`123${tab.route}`}/>
                ))

                }

            </div>
        </>
    )
}

export default TabContainer;
