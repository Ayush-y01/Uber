import React from "react";

const CaptainDetails = () => {
    return (
        <div>
                          <div className="flex items-center jsutify-between"> 
                <div className="flex items-center jsutify-start gap-4">
                    <img className="h-10 w-10 rounded-full object-cover" src="" alt="" />
                    <h4 className="text-lg font-medium">Harsh patel</h4>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">374.89</h4>
                    <p className="text-sm text-gray-600"> Earned</p>
                </div>
              </div>
              <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start">
                <div className="text-center">
                    <i className="text-3xl font-thin mb-2 ri-timer-2-line"></i>
                    <h5 className="text-lg font-medium">10.2</h5>
                    <p className="text-sm text-gray-600">Hours</p>

                </div>
                <div className="text-center">
                    <i className="text-3xl font-thin mb-2 ri-speed-up-line"></i>
                    <h5 className="text-lg font-medium">10.2</h5>
                    <p className="text-sm text-gray-600">Hours</p>

                </div>
                <div className="text-center">
                    <i className="text-3xl font-thin mb-2 ri-booklet-line"></i>
                    <h5 className="text-lg font-medium">10.2</h5>
                    <p className="text-sm text-gray-600">Hours</p>
                </div>
              </div>
        </div>
    )
}

export default CaptainDetails;