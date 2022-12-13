import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
