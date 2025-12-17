import React from "react";

const RidePopup = (props) => {
    return (
        <div>
             <h5 onClick={()=>{
                    props.setRidePopPanel(false)
                }} className="p-3 text-center absolute top-0 w-[93%]"><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
            <h3 className="text-2xl font-semibold mb-5"> New Ride Available</h3>
            <div className="flex items-center justify-between p-3 bg-yellow-100 rounded-lg mt-4">
                <div className="flex items-center gap-3 ">
                    <img className="h-12 w-12 rounded-full object-cover" src="here comes image of " alt="" />
                    <h2 className="text-lg font-medium">Harsh Patel</h2>
                </div>
                <h5 className="text-lg font-semibold">2.7 KM</h5>
            </div>

            <div className="flex gap-2 justify-between flex-col items-center">
                {/* <img className="h-20" src="confirm-vehicle-img" alt="##" /> */}
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
                    <div className="flex w-full items-center justify-between">
                        <button onClick={() => {
                        props.setConfirmRidePopPanel(true)

                    }} className=" mt-5 bg-green-600 text-white font-semibold p-3 px-8">Accept</button>
                    <button onClick={() => {
                        props.setRidePopPanel(false)

                    }} className=" mt-2 bg-gray-300 text-gray-700 font-semibold p-3 px-8">Ignore</button>
                    </div>
            </div>
        </div>
    )
}

export default RidePopup;