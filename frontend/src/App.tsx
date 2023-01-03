import React from 'react';
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Auth from './pages/Auth/Auth';
import Error from './pages/Error/Error';
import Chat from './pages/Chat/Chat';

export default function App(){
    


    return(
        <Routes>
            <Route path='/' element={<Chat/>} />
            <Route path='/login' element={<Auth/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
    )
}