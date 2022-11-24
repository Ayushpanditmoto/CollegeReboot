import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Components/Home';
import Login from './Pages/Components/Login';
import Profile from './Pages/Components/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
