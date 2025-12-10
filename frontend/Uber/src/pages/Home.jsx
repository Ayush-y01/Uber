import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return ( 
    <div>
        <div className='bg-cover bg-right bg-[url(./homeimg.webp)] h-screen flex justify-between flex-col bg-red-200 w-full'>
            <img className='w-30' src="./pngegg.png" alt="" />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get Started with uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
     );
}

export default Home;