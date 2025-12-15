import React, { useRef, useState } from "react";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";

const HomePage = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false);
    const vehiclePanelRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const [vehiclePanel, setVehiclePanel] = useState(false)
    const [confirmRidePanel, setConfirmRidePanel] = useState(false)

    const submitHandler = (e)=>{
        e.preventDefault()

    }

    useGSAP(function() {
        if (panelOpen) {
            gsap.to(panelRef.current,{
            height:'70%',
            padding:24
            // opacity:1
        })
            gsap.to(panelCloseRef.current,{
            opacity:1
        })
        } else {
            gsap.to(panelRef.current,{
            height:'0%',
            padding:0
            // opacity:0
        })
            gsap.to(panelCloseRef.current,{
            opacity:0
        })
        }
    },[panelOpen])

    useGSAP(function() {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
            Transform:'translateY(0)'
        })
        } else {
            gsap.to(vehiclePanelRef.current, {
            Transform:'translateY(100%)'
        })
        }
    },[vehiclePanel])

    useGSAP(function() {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
            Transform:'translateY(0)'
        })
        } else {
            gsap.to(confirmRidePanelRef.current, {
            Transform:'translateY(100%)'
        })
        }
    },[confirmRidePanel])

    return (
        <div className="h-screen relative overflow-hidden">
            <img className="w-16 absolute left-5 top-5" src="Uber-logo" alt="##" />  {/* here uber logo comes */}
            <div className="h-screen w-screen ">
                {/* map comes here */}
                <img className="h-full w-full object-cover" src="Map-image" alt="" /> 
            </div>
            <div className="bg-white flex flex-col justify-end h-screen absolute top-0 w-full"> 

                <div className="h-[30%] p-5 bg-white relative">
                   <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(false)
                   }} className="absolute opacity-0 top-6 right-3 text-2xl">
                        <i className='ri-arrow-down-wide-line'></i>
                   </h5>
                    <h4 className="text-2xl font-semibold">Find a trip</h4>
                    <form onSubmit={(e) =>{
                        submitHandler(e)
                    }} >
                        <div className="line absolute h-16 w-2 top-[45%] left-10 bg-gray-700 rounded-full"></div>
                        <input 
                        onClick={() => {
                            setPanelOpen(true)
                        }}
                        value={pickup}
                        onChange={(e)=>{
                            setPickup(e.target.value)
                        }}
                        className="bg-[#eeeee] px-12 py-2 text-lg rounded-lg w-full mt-5 " type="text" placeholder="add a pickup location" />
                        <input
                        onClick={() => {
                            setPanelOpen(true)
                        }}
                        value={destination}
                        onChange={(e)=>{
                            setDestination(e.target.value)
                        }}
                         className="bg-[#eeeee] px-12 py-2 text-lg rounded-lg w-full mt-5 " type="text" placeholder="Enter your destination" />
                    </form>
                </div>
                <div ref={panelRef} className="h-0 bg-white">
                        <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
                </div>
            </div>
            <div ref={vehiclePanelRef} className="fixed w-full translate-x-full z-10 bottom-0 bg-white px-3 py-10 pt-12">
                <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
            </div>
            <div ref={confirmRidePanelRef} className="fixed w-full translate-x-full z-10 bottom-0 bg-white px-3 py-10 pt-12">
                <ConfirmRide />
            </div>
        </div>
    )
}

export default HomePage