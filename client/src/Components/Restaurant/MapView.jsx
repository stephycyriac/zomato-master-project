import React from 'react'
import{ IoMdCopy} from "react-icons/io";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {FaDirections} from "react-icons/fa"
const MapView = (props) => {
    // [9.9752141219388, 76.29515793941525]
    return (
        <>
            <div className=" p-2">
                   <div >
                   <h3 className="text-2xl font-light mt-3">Call</h3>
                   <h5 className="text-gray-600 font-medium">{props.phno}</h5>
                    </div>
                   <div>
                   <h3 className="text-2xl font-light mt-3">Direction</h3>
                   <div className="w-full h-48">
                   <MapContainer center={props.mapLocation} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={props.mapLocation}>
                    <Popup>
                    {props.title}
                    </Popup>
                    </Marker>
                    </MapContainer>
                     </div>
                     </div>
                     <p>{props.address}</p>
                     <div className="flex items-center gap-2">
                       <button className="border border-gray-600 text-gray-600 py-2 px-3 rounded-lg flex items-center gap-1"> <IoMdCopy/>
                       <span className="text-black">Copy </span> </button>
                       <button className="border border-gray-600 text-gray-600 py-2 px-3 rounded-lg flex items-center gap-1">
                         <span className="text-zomato-400"><FaDirections/></span>
                         <span className="text-black">Direction</span></button>
                   </div>
                  
                   </div>
        </>
    )
}

export default MapView
