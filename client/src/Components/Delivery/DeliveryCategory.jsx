import React from 'react'

const DeliverySmCard = ({image ,title}) => {
    return (
        <>
           <div className=" lg:hidden bg-white shadow rounded-lg md:w-56">
                 <div className="w-full h-24 md:h-40">
                    <img src={image}
                         alt="food- chicken"
                         className="w-full h-full rounded-t-lg"/>
                  </div>
                  <div>
                      <h3 className="text-sm  my-2 text-center font-light object-cover">{title}</h3>
                  </div>
           </div> 
        </>
    );
};

const DeliveryLgCard = ({image ,title}) => {
 return(
   <>
     <div className=" hidden lg:block my-4 rounded-lg w-56 h-48  ">
                 <div className="w-full h-full">
                    <img src={image}
                         alt="food- chicken"
                         className="w-full h-full object-cover  shadow-lg"/>
                  </div>
                  <div>
                      <h3 className="text-2xl my-2 font-normal ">{title}</h3>
                  </div>
           </div> 
     </>
 );
};

const DeliveryCategory = (props) => {

return(
    <>
    <DeliverySmCard {...props}/>
    <DeliveryLgCard {...props}/>
    </>
);
};
export default DeliveryCategory;