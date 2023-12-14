import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import { RequireAuth } from './components/RequireAuth';
import { AlreadyAuthenticated } from './components/AlreadyAuthenticated';
function App() {
  return (
    <Routes>
      <Route element={<AlreadyAuthenticated />}>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Route>

      <Route element={<RequireAuth />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
