import React from "react";

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 onClick={()=>{
                    props.setVehiclePanel(false)
                }} className="p-3 text-center absolute top-0 w-[93%]"><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
                <div onClick={() =>{
                    props.setConfirmRidePanel(true)
                }} className="flex border-2 active:border-black  mb-2 rounded-xl w-full  p-3 items-center justify-between">
                    <img className="h-12" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yOWZiYjhiMC03NWIxLTRlMmEtODUzMy0zYTM2NGU3MDQyZmEucG5n" alt="##" />
                    <div className=" -ml-2 w-1/2">
                        <h4 className="font-medium text-lg">UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                        <h5 className="font-medium text-sm">2 min away</h5>
                        <p className="font-medium text-xs text-gray-600">Affordable, compact rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">$193.20</h2>
                </div>
                                <div onClick={() =>{
                    props.setConfirmRidePanel(true)
                }} className="flex border-2 active:border-black  mb-2 rounded-xl w-full  p-3 items-center justify-between">
                    <img className="h-12" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yOWZiYjhiMC03NWIxLTRlMmEtODUzMy0zYTM2NGU3MDQyZmEucG5n" alt="##" />
                    <div className=" -ml-2 w-1/2">
                        <h4 className="font-medium text-lg">UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                        <h5 className="font-medium text-sm">2 min away</h5>
                        <p className="font-medium text-xs text-gray-600">Affordable, compact rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">$193.20</h2>
                </div>
        </div>
    )
}

export default VehiclePanel;