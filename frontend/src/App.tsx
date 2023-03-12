import {BrowserRouter, Route, Routes, Navigate, useNavigate} from "react-router-dom";
import {useEffect, useState, useContext} from "react"
import axios from "axios";
import Auth from './pages/Auth/Auth';
import Error from './pages/Error/Error';
import Chat from './pages/Chat/Chat';
import {AuthProvider}  from './context/AuthProvider';
import AuthContext from "./context/AuthProvider";

export default function App(){
    const {persist}: any = useContext(AuthContext)

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={persist ? <Navigate to='/' replace={true}/> : <Auth/>} />
                <Route path='/' element={persist ? <Chat/> : <Navigate to='/login' replace={true}/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
        
    )
}



