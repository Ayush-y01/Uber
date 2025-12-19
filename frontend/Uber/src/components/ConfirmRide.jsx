import React from "react";

const ConfirmRide = (props) => {
    return (
        <div>
            <h5 onClick={()=>{
                    props.setVehiclePanel(false)
                }} className="p-3 text-center absolute top-0 w-[93%]"><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
            <h3 className="text-2xl font-semibold mb-5"> Confirm Your Ride</h3>

            <div className="flex gap-2 justify-between flex-col items-center">
                <img className="h-20" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yOWZiYjhiMC03NWIxLTRlMmEtODUzMy0zYTM2NGU3MDQyZmEucG5n" alt="##" />
                <div className="w-full mt-5">
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">563/11-A</h3>
                            <p className="text-sm -mt-1 text-gray-600">kankariya talab, Bhopal</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">563/11-A</h3>
                            <p className="text-sm -mt-1 text-gray-600">kankariya talab, Bhopal</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 ">
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">193.20</h3>
                            <p className="text-sm -mt-1 text-gray-600">Cash cash</p>
                        </div>
                    </div>
                </div>
                    <button onClick={() => {
                        props.setVehicleFound(true)
                        props.setConfirmRidePanel(false)
                    }} className="w-full mt-5 bg-green-500 text-white font-semibold p-2">Confirm</button>
            </div>
        </div>
    )
}
export default ConfirmRide;