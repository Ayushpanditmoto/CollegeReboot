import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Forgot from './Pages/ForgotPassword/Forgot';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/:path' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
