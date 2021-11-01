import React from 'react'

const MenuCollection = (props) => {
    return (
        <>
           <div className="w-32 h-32 md:w-56 h-56 flex flex-col ">
            <div className="w-full h-full overflow-hidden ">
                <img src={props.image}
                     alt="menu"
                     className="w-full h-full rounded-lg transform transition duration-400 hover:scale-110"/>
            </div>
            <div>
                <strong>{props.menuTitle}</strong>
                <h6>{props.pages}</h6>

            </div>
           </div>
        </>
    )
}

export default MenuCollection
