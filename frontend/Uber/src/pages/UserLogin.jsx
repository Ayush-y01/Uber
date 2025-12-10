import React, { useState } from 'react';
import { Link } from 'react-router-dom'
function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({})

    const submitHandler = (e)=>{
        e.preventDefault();
        setUserData({
            email:email,
            password:password
        });     
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
           <p className='text-center'>New Here?  <Link to='/signup' className=" text-blue-600">Create new Account</Link></p>
          </form>
        </div>
        <div>
          <Link to='/captain-login' className="bg-red-600 flex items-center justify-center text-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
            Sign In as Captain
          </Link>
        </div>
      </div>
    );
}

export default UserLogin;