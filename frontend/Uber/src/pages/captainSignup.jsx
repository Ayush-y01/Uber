import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';



function CaptainSignup() {

    const navigate = useNavigate()


      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");

      const [vehicleColor, setVehicleColor] = useState("");
      const [vehiclePlate, setVehiclePlate] = useState("");
      const [vehicleCapacity, setVehicleCapacity] = useState("");
      const [vehicleType, setVehicleType] = useState("");

      const { captain, setCaptain } = React.useContext(CaptainDataContext);

      const submitHandler = async (e) => {
        e.preventDefault();

        const captainData = {
          fullname: {
            firstname: firstName,
            lastname: lastName,
          },
          email,
          password,
          vehicle: {
            color: vehicleColor,
            plate: vehiclePlate,
            capacity: vehicleCapacity,
            vehicleType: vehicleType,
          },
        };

        try {
          const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/captains/register`,
            captainData
          );

          if (response.status === 201) {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem("token", data.token);
            navigate("/captain-home");
          }
        } catch (error) {
          console.error(
            "Signup failed:",
            error.response?.data || error.message
          );
        }

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setVehicleColor("");
        setVehiclePlate("");
        setVehicleCapacity("");
        setVehicleType("");
      };

    

    return (
      <div>
        <div className="p-5 h-screen flex flex-col justify-between">
          <div>
            <img className="w-30" src="./pngegg.png" alt="" />
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <h3 className=" text-base font-medium mb-2">
                What's our captain name
              </h3>
              <div className="flex gap-4 mb-6">
                <input
                  required
                  className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-base"
                  type="text"
                  placeholder="First name.."
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <input
                  required
                  className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base "
                  type="text"
                  placeholder="last name.."
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>

              <h3 className="text-base font-medium mb-2">
                What's our captain email
              </h3>
              <input
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="email@example.com.."
              />

              <h3 className="text-base font-medium mb-2">
                Enter our captain password
              </h3>
              <input
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="password..."
              />
              <h3 className="text-base font-medium mb-2">
                Vehicle Information
              </h3>
              <input
                className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                required
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                type="text"
                placeholder="Vehicle color"
              />
              <input
                className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                required
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                type="text"
                placeholder="Vehicle plate number"
              />
              <input
                className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                required
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                type="number"
                min="1"
                placeholder="Vehicle capacity"
              />
              <select
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg"
                required
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="" disabled>
                  Select vehicle type
                </option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="bike">Bike</option>
              </select>

              <button className="bg-black text-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
                signup
              </button>
            </form>
            <p className="text-center">
              Already have a account?{" "}
              <Link to="/login" className="text-blue-600">
                Login here
              </Link>
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">
              Lorem ipsum Sunt numquam, voluptatem atque nesciunt vero sed,
              Dicta recusandae quasi corrupti?
            </p>
          </div>
        </div>
      </div>
    );
}



export default CaptainSignup;

