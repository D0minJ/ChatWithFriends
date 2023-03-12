import { createContext, useState, useEffect } from "react";
import { io } from "socket.io-client"
import axios from "axios";
import Loading from "../portals/Loading"


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
        // Turn on Spinner
        setIsLoading(true)
        axios.get("http://localhost:5000/api/v1/token/verifytoken", {withCredentials: true})
            .then((response) => {
                if(response.data.error!) {
                    setPersist(false)
                } else {
                    // Renew refresh token
                    axios.get("http://localhost:5000/api/v1/token/renewtoken", {withCredentials: true})
                        .then(()=> {
                            // Get user info
                            axios.get("http://localhost:5000/api/v1/user", {withCredentials: true})
                                .then((response) => {
                                    // Connect to socket server
                                    const socket = io("http://localhost:5000/", { auth: { userID: response.data.userID}});
                                    setAuth({...response.data, socket: socket})
                                })
                            setPersist(true)
                        }
                    )
                }
            }
        )
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