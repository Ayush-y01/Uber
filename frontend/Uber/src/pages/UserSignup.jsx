
import React from 'react';

function UserSignup() {
    return ( <div>
        <h1>UserSignup</h1>
    </div> );
}

export default UserSignup;
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const UserSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const submitHandler = (e) =>{
        e.preventDefault()
    }



    return (
        <div>
            <div className="p-7 h-screen flex flex-col justify-between">
                <div>
                    <img className="w-16 mb-10" src="" alt="" />
                    <form onSubmit={(e)=>{
                        submitHandler(e)
                    }}>
                        <h3 className=" text-base font-medium mb-2">What's your name..</h3>
                        <div className="flex gap-4 mb-6">
                            <input required
                        className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-base"
                        type="text" 
                        placeholder="First name.."
                        value={firstName}
                        onChange={(e)=>{
                            setFirstName(e.target.value)
                        }}
                        />
                        <input required
                        className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base "
                        type="text" 
                        placeholder="last name.."
                        value={lastName}
                        onChange={(e)=>{
                            setLastName(e.target.value)
                        }}
                        />
                        </div>
                        
                        <h3 className=" text-base font-medium mb-2">What's your email..</h3>
                        <input required
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border text-base"
                        type="email" 
                        placeholder="email@example.com.."
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        />

                        <h3 className="text-base font-medium mb-2">What's your Password..</h3>
                        <input required
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border text-base"
                        type="password" 
                        placeholder="password.."
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        />
                    </form>
                    <p className="text-center">Already have a account? <Link to='/signup' className='text-blue-600'>Login here</Link></p>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Sunt numquam, voluptatem atque nesciunt vero sed, culpa ipsum dolorum 
                        rerum dolorem, incidunt ipsam expedita. Vitae, aliquid aspernatur.
                         Dicta recusandae quasi corrupti?
                    </p>
                </div>
            </div>
        </div>
    )
}
