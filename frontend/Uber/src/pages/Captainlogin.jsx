import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import CaptainContext, { CaptainDataContext } from '../context/CaptainContext';


function Captainlogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { captain, setCaptain } = React.useContext(CaptainDataContext);
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault();
        const captain = {
            email:email,
            password:password
        };     

        // const response = await axios.post(`${import.meta.env.VITE_BASE_URL}`,captain)

       try {
                 const response = await axios.post(
                   `${import.meta.env.VITE_BASE_URL}/captains/login`,
                   captain
                 );
       
                 if (response.status === 200) {
                   const data = response.data;
                   setCaptain(data.captain);
                   localStorage.setItem("token", data.token);
                   navigate("/captain-home");
                 }
               } catch (error) {
                 console.error(
                   "Login failed:",
                   error.response?.data || error.message
                 );
               }

        
        setEmail('');
        setPassword(''); 
    }
    return ( 
      <div className="p-5 flex flex-col justify-between h-screen">
        <div>
          <img className="w-30" src="./pngegg.png" alt="" />
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              required
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              type="email"
              placeholder="email@example.com.."
            />
            <h3 className="text-lg font-medium mb-2">Enter your password</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              required
               value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              type="password"
              placeholder="password..."
            />
            <button className="bg-black text-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
              login
            </button>
           <p className='text-center'>Join a fleet?  <Link to='/captain-signup' className=" text-blue-600">Register as a captain</Link></p>
          </form>
        </div>
        <div>
          <Link to='/login' className="bg-black flex items-center justify-center text-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
            Sign In as User
          </Link>
        </div>
      </div>
     );
}

export default Captainlogin;