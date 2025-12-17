import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'
import UserLogin from './pages/UserLogin.jsx'
import UserSignup from './pages/UserSignup.jsx'
import Captainlogin from './pages/Captainlogin.jsx'
import CaptainSignup from './pages/captainSignup.jsx'
import CaptainRiding from './pages/CaptainRiding.jsx';

function App() {
  return ( 
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<Captainlogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/captain-riding' element={<CaptainRiding />} />
      </Routes>
    </div>
   );
}

export default App;