import React from 'react';
import clasnames from "classnames";
import {useLocation ,  Link , useParams} from "react-router-dom";
const Tab = (props) => {
    const {id} = useParams()
    return(
        <>
        <Link to={`/restaurant/${id}/${props.route}`}>
        <div className={clasnames("text-gray-500 font-light", {
            "text-zomato-400 font-semibold":props.isActive ,
        })}>
            <h3 className="text-sm md:text-xl ">{props.title}</h3>
        </div>
        </Link>
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
            <div className="flex items-center pb-4 gap-8 md:gap-12  overflow-x-scroll border-b-2">
                {tabs.map((tab) => (
                    <Tab {...tab} key={`123${tab.route}`}/>
                ))

                }

            </div>
        </>
    )
}

export default TabContainer;
