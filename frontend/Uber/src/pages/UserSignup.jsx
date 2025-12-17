import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserDataContext } from '../context/UserContext'

function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState("");

  const navigate = useNavigate()
  const {user, setUser } = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)


    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/Home')
    }
    
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')

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
            <h3 className=" text-base font-medium mb-2">What's your name</h3>
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

            <h3 className="text-base font-medium mb-2">What's your email</h3>
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

            <h3 className="text-base font-medium mb-2">Enter your password</h3>
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
            <button className="bg-black text-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
              Create Account
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
            Lorem ipsum Sunt numquam, voluptatem
            atque nesciunt vero sed, Dicta recusandae quasi corrupti?
          </p>
        </div>
      </div>
    </div>
  );
}
export default UserSignup;
