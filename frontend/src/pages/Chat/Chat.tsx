import { Box } from "@chakra-ui/react"
import {useEffect, useContext} from "react"
import ChatPanel from "./Components/ChatPanel/ChatPanel"
import Menu from "./Components/Menu/Menu"
import OptionPanel from "./Components/OptionPanel/OptionPanel"
import axios from "axios"
import AuthContext from "../../context/AuthProvider"
import { PageProvider } from "../../context/PageProvider"
import { ContactProvider } from "../../context/ContactProvider"
import { io } from "socket.io-client"

export default function Chat(){
    const { setAuth }: any = useContext(AuthContext)



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