import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import FinishRide from "../components/FinishRide";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)


    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                Transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                Transform: 'translateY(100%)'
            })
        }
    }, [finishRidePanel])


    return (
        <div className="h-screen relative">

            <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
                <img className="w-16" src="" alt="" />
                <Link to='/captain-home' className=" h-10 w-10 bg-white flex items-center" >
                    <i className="text-lg font-medium ri-home-5-line"></i> {/*heren we need change icon for exit and back*/}
                </Link>
            </div>
            <div className="h-4/5 ">
                <img className="h-full w-full object-cover" src="##" alt="" />
            </div>
            <div className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-500"
            onClick={()=>{
                setFinishRidePanel(true)
            }}
            >
            <h5 className="p-3 text-center absolute top-0 w-[95%]" onClick={()=>{
                    
                }} ><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
                <h4 className="text-xl font-semibold">4 km away</h4>
                <button className=" mt-5 bg-green-600 text-white font-semibold p-3 px-8">Complete Ride</button>
            </div>
            <div ref={finishRidePanelRef} className="fixed w-full translate-y-full bottom-0 bg-white px-3 py-10 pt-12">
                <FinishRide setFinishRidePanel={setFinishRidePanel}  />
            </div>
        </div>
    )
}

export default CaptainRiding;