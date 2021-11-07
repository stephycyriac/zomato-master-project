import React from 'react'

const FoodItem = (props) => {
    return (
        <>
                   <div className="flex justify-between" >
                  <div>
                  <h5>{props.name}</h5>
                    <small>Quantity : {parseInt(props.quantity)}kg</small>
                  </div>
                    <div className="flex flex-col items-end">
                    <h5>₹{parseInt(props.price) * parseInt(props.quantity)}</h5>
                 <div className="bg-zomato-400 text-white flex items-center rounded-lg">
                 <button className="bg-zomato-400 text-white p-2 rounded-lg">-</button>
                 <small className="bg-zomato-400 text-white p-2 ">1</small>
                 <button className="bg-zomato-400 text-white p-2 rounded-lg">+</button>
                 </div>
                    </div>
                </div>
                <hr className="my-2"/>

        </>
    )
}

export default FoodItem
