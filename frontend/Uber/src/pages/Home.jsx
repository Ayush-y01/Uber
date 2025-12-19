import React, { useRef, useState } from "react";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver"
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false);
    const vehiclePanelRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const vehicleFoundRef = useRef(null)
    const WaitingForDriverRef = useRef(null)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const [vehiclePanel, setVehiclePanel] = useState(false)
    const [confirmRidePanel, setConfirmRidePanel] = useState(false)
    const [vehicleFound, setVehicleFound] = useState(false)
    const [waitingForDriver, setWaitingForDriver] = useState(false)
    

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
            // Transform:'translateY(0)'
            y:0,
        })
        } else {
            gsap.to(vehiclePanelRef.current, {
            // Transform:'translateY(100%)'
            y:'100%'
        })
        }
    },[vehiclePanel])

    useGSAP(function() {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
            // Transform:'translateY(0)'
            y:0,
        })
        } else {
            gsap.to(confirmRidePanelRef.current, {
            // Transform:'translateY(100%)'
            y:'100%'
        })
        }
    },[confirmRidePanel])

    useGSAP(function() {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
            // Transform:'translateY(0)'
            y:0,
        })
        } else {
            gsap.to(vehicleFoundRef.current, {
            // Transform:'translateY(100%)'
            y:'100%'
        })
        }
    },[confirmRidePanel])

        useGSAP(function() {
        if (waitingForDriver) {
            gsap.to(WaitingForDriverRef.current, {
            // Transform:'translateY(0)'
            y:0,
        })
        } else {
            gsap.to(WaitingForDriverRef.current, {
            // Transform:'translateY(100%)'
            y:'100%'
        })
        }
    },[waitingForDriver])

    return (
        <div className="h-screen relative overflow-hidden">
            <img className="w-30 absolute left-5 top-5" src="./pngegg.png" alt="##" />  {/* here uber logo comes */}
            <div className="h-screen w-screen ">
                {/* map comes here */}
                <img className="h-full w-full object-cover" src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png" alt="##" /> 
            </div>
            <div className=" flex flex-col justify-end h-screen absolute top-0 w-full"> 

                <div className="h-[25%] p-5 bg-white relative">
                   <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(false)
                   }} className="absolute opacity-0 top-6 right-7 text-2xl">
                        <i className='ri-arrow-down-wide-line'></i>
                   </h5>
                    <h4 className="text-2xl mb-5 font-semibold">Find a trip</h4>
                    <form onSubmit={(e) =>{
                        submitHandler(e)
                    }} >
                        <div className="line absolute h-16 w-1 top-[50%] left-10 bg-gray-700 rounded-full"></div>
                        <input 
                        onClick={() => {
                            setPanelOpen(true)
                        }}
                        value={pickup}
                        onChange={(e)=>{
                            setPickup(e.target.value)
                        }}
                        className="bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-5 " type="text" placeholder="add a pickup location" />
                        <input
                        onClick={() => {
                            setPanelOpen(true)
                        }}
                        value={destination}
                        onChange={(e)=>{
                            setDestination(e.target.value)
                        }}
                         className="bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-5 " type="text" placeholder="Enter your destination" />
                    </form>
                </div>
                <div ref={panelRef} className="h-0 bg-white">
                        <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
                </div>
            </div>
            <div ref={vehiclePanelRef} className="fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-10 pt-12">
                <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
            </div>
            <div ref={confirmRidePanelRef} className="fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-10 pt-12">
                <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
            </div>
            <div ref={vehicleFoundRef} className="fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-10 pt-12">
                <LookingForDriver setVehicleFound={setVehicleFound} />
            </div>
            <div ref={WaitingForDriverRef} className="fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-10 pt-12">
                <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
            </div>
        </div>
    )
}

export default Home