import {useContext} from "react"
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";


import Auth from './pages/Auth/Auth';
import Error from './pages/Error/Error';
import Chat from './pages/Chat/Chat';

import AuthContext from "./context/AuthProvider";

export default function App(){
    const {persist}: any = useContext(AuthContext)

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={persist ? <Chat/> : <Navigate to='/login' replace={true}/>} />
                <Route path='/login' element={persist ? <Navigate to='/' replace={true}/> : <Auth/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
        
    )
}



