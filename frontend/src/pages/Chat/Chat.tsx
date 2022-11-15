import { Box } from "@chakra-ui/react"
import React from "react"
import ChatPanel from "./Components/ChatPanel"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"




export default function Chat(){
    return(
        <Box>
            <Header/>
            <Sidebar/>
            
            
            {/* <ChatPanel/> */}
        </Box>
    )

}