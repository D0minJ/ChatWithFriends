import { useEffect, useContext } from "react"
import { Box } from "@chakra-ui/react"
import axios from "axios"
import { io } from "socket.io-client"


import ChatPanel from "./Components/ChatPanel/ChatPanel"
import Menu from "./Components/Menu/Menu"
import OptionPanel from "./Components/OptionPanel/OptionPanel"

import { PageProvider } from "../../context/PageProvider"
import { ContactProvider } from "../../context/ContactProvider"
import AuthContext from "../../context/AuthProvider"

export default function Chat(){
    const { setAuth }:any = useContext(AuthContext)


    useEffect(() => {
        // Get user credentials
        axios.get("http://localhost:5000/api/v1/user", {withCredentials: true})
            .then((response) => {
                // Connect to socket server
                const socket = io("http://localhost:5000/", { auth: { userID: response.data.userID}});
                setAuth({...response.data, socket: socket})
            }
        )
        
    }, [])

    return(
        <Box display="flex" >
            <PageProvider>
                <OptionPanel/>
                <ContactProvider>
                    <Menu/>
                    <ChatPanel/>
                </ContactProvider>
            </PageProvider>
        </Box>
    )
}