import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import CaptainDetails from '../components/CaptainDetails';
import RidePopup from '../components/RidePopup';
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { useRef } from "react";


const CaptainHome = () => {
    const ridePopPanelRef = useRef(null)
    const confirmRidePopPanelRef = useRef(null)


    const [ridePopPanel, setRidePopPanel] = useState(true)
    const [confirmRidePopPanel, setConfirmRidePopPanel] = useState(false)


        useGSAP(function() {
            if (ridePopPanel) {
                gsap.to(ridePopPanelRef.current, {
                Transform:'translateY(0)'
            })
            } else {
                gsap.to(ridePopPanelRef.current, {
                Transform:'translateY(100%)'
            })
            }
        },[ridePopPanel])

        useGSAP(function() {
            if (confirmRidePopPanel) {
                gsap.to(confirmRidePopPanelRef.current, {
                Transform:'translateY(0)'
            })
            } else {
                gsap.to(confirmRidePopPanelRef.current, {
                Transform:'translateY(100%)'
            })
            }
        },[confirmRidePopPanel])


    return (
        <div className="h-screen">
            <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
                <img className="w-16" src="./pngegg.png" alt="" />
                <Link to='/captain-home' className=" h-10 w-10 bg-white rounded-full flex items-center justify-center" >
                    <i className="text-lg font-medium ri-home-5-line"></i> {/*heren we need change icon for exit and back*/}
                </Link>
            </div>
            <div className="h-3/5 ">
                <img className="h-full w-full object-cover" src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png" alt="" />
            </div>
            <div className="h-1/5 p-6">
                < CaptainDetails/>
            </div>
            <div ref={ridePopPanelRef} className="fixed w-full translate-y-full bottom-0 bg-white px-3 py-10 pt-12">
                <RidePopup setRidePopPanel={setRidePopPanel}  setConfirmRidePopPanel={setConfirmRidePopPanel} />
            </div>
            <div ref={confirmRidePopPanelRef} className="fixed w-full h-screen translate-y-full bottom-0 bg-white px-3 py-10 pt-12">
                <ConfirmRidePopUp setConfirmRidePopPanel={setConfirmRidePopPanel} setRidePopPanel={setRidePopPanel} />
            </div>
        </div>
    )
}

export default CaptainHome