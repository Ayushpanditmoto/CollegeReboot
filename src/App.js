import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Forgot from './Pages/ForgotPassword/ForgotPassword';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home';
import Reset from './Pages/ResetPassword/ResetPassword';
import EmailReset from './Pages/EmailReset/EmailReset';
import ResetLink from './Pages/ResetPassword/ResetLink';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/reset-link' element={<ResetLink />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/:path' element={<NotFound />} />
        <Route path='/emailreset' element={<EmailReset />}/>
      </Routes>
    </>
  );
}

export default App;
