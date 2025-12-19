import React from "react";
import { Link } from 'react-router-dom';

const Riding = () => {
    return (
        <div className="h-screen">
                    <Link to='/home' className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center" >
                        <i className="text-lg font-medium ri-home-5-line"></i>
                    </Link>
                    <div className="h-1/2">
                        <img className="h-full w-full object-cover" src="" alt="" />
                    </div>
                    <div className="h-1/2 p-4">
                        <div className="flex items-center justify-between">
                            <img className="h-12" src="" alt="" />
                            <div className="text-right">
                                <h2 className="text-lg font-medium">Ayush</h2>
                                <h4 className="text-xl font-semibold -mt-1 -mb-1">GJ 05 NB 1234</h4>
                                <p className="text-sm text-gray-600">Suzuki Ciaz</p>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-between flex-col items-center">
                            <div className="w-full mt-5">
                                <div className="flex items-center gap-5 p-3 border-b-2">
                                    <i className="text-lg ri-map-pin-2-fill"></i>
                                    <div>
                                        <h3 className="text-lg font-medium ">562/11A</h3>
                                        <p className="text-sm -mt-1 text-gray-600">xyz road, 12 abc</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 p-3">
                                    <i className="ri-currency-line"></i>
                                    <div>
                                        <h3 className="text-lg font-medium">193.20</h3>
                                        <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-5 bg-green-600 text-white">Make A payment</button>
                    </div>
                </div>
    )
}
export default Riding