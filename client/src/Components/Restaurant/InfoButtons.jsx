import React from 'react';
import classnames from "classnames";
import {AiOutlineStar} from "react-icons/ai";
const InfoButtons = () => {
    return (
        <>
             {/* buttons---bookmark , review,direction,share */}

             <div className="my-4">
                <button className={classnames("flex items-center gap-3 border border-zomato-400 text-white")}>Add Review <AiOutlineStar/> </button>
             </div>  
        </>
    )
}

export default InfoButtons
