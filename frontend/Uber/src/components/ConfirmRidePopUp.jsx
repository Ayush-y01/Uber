import React, { useState } from "react";
import { Link } from 'react-router-dom';

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState()
    
    const submitHandler = (e) => {
        e.preventDefault()
    }


    return (
        <div>
             <h5 onClick={()=>{
                    props.setRidePopPanel(false)
                }} className="p-3 text-center absolute top-0 w-[93%]"><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
            <h3 className="text-2xl font-semibold mb-5"> Confirm this Ride to start</h3>
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
                
                    <div className="mt-6 w-full">
                        <form onSubmit={(e)=>{
                            e.submitHandler(e)

                        }}>
                            <input onChange={()=>{
                                
                            }} type="text" className="bg-[#eeeee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-5 " placeholder="Enter OTP" />
                            <Link to='/captain-riding' className="w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-2">Confirm</Link>
                        <button onClick={() => {
                        props.setConfirmRidePopPanel(false)
                        props.setRidePopPanel(false)

                    }} className="w-full mt-2 bg-red-300 text-white font-semibold p-2">Cancle</button>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopUp;