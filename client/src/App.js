import React from 'react';
import Login from '../src/components/Login';
import ForgotPassword from '../src/components/ForgotPassword';
import Home from '../src/components/Home';
import { Routes, Route } from 'react-router-dom';
import { useUserContext } from './context/userContext';

export default function App(){

    const {user} = useUserContext();

    if(user){
        return(
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        )
    }

    return(
        <>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/forgotpassword" element={<ForgotPassword />} />
            </Routes>
        </>
    )
}