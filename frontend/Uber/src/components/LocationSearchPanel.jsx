import React from "react";

const LocationSearchPanel = () => {
    // sample array for location
    const locations = [
        "24B, Near Kapoor's cafe, Sheryians coding school, Bhopal",
        "25C, Karves's cafe, Sheryians coding school, Surat",
        "26D, Near Kapoor's cafe, Sheryians coding school, Mumbai",
        "27E, Near Kapoor's cafe, Sheryians coding school, Delhi",
    ]
    return (
        <div>
            {/* this is just a sample data */}

            {
                locations.map(function(elem,idx){
                    return <div key={idx} onClick={() => {
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }} className="flex border-2 p-3 rounded-xl border-white active:border-black items-center gap-4 my-2 justify-start">
                    <h2 className="bg-[#eeee] h-8 w-12 flex items-center justify-center rounded-full"><i className="ri-map-pin-fill "></i></h2>
                    <h4 className="font-medium">{ elem}</h4>
                    </div>
                })
            }

            {/* <div className="flex border-2 p-3 rounded-xl border-white active:border-black items-center gap-4 my-2 justify-start">
                <h2 className="bg-[#eeee] h-8 w-12 flex items-center justify-center rounded-full"><i className="ri-map-pin-fill "></i></h2>
                <h4 className="font-medium">24B, Near Kapoor's cafe, Sheryians coding school, Bhopal</h4>
            </div> */}
        </div>
    )

}

export default LocationSearchPanel;