import { createContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
import Loading from "../portals/Loading"
import { io } from "socket.io-client"

interface AuthContextInterface {
    auth?: any
    setAuth:(a: any) => any
    
}

const AuthContext = createContext({})

export function AuthProvider({ children }: any) {
    const [auth, setAuth] = useState({});
    const [persist, setPersist] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(() => {
        setIsLoading(true)
        axios.get("http://localhost:5000/api/v1/token/verifytoken", {withCredentials: true})
        .then((response) => {
            if(response.data.error!){

                setPersist(false)
                
            }else{

                axios.get("http://localhost:5000/api/v1/token/renewtoken", {withCredentials: true}).then(()=> {
                    axios.get("http://localhost:5000/api/v1/user", {withCredentials: true})
                    .then((response) => {
                        const socket = io("http://localhost:5000/", { auth: { userID: response.data.userID}});
                        
                        setAuth({...response.data, socket: socket})
                    })
                    setPersist(true)

                })
                

            }})
        setIsLoading(false)
    }, [])




    return (
        <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
            {(() => {
                if (isLoading) {
                    return <Loading showLoading={isLoading} />
                } else {
                    return children
                }
                })()}
        </AuthContext.Provider>
    );


}

export default AuthContext