import { Box } from "@chakra-ui/react"
import React from "react"
import ChatPanel from "./Components/ChatPanel/ChatPanel"
import Menu from "./Components/Menu/Menu"
import OptionPanel from "./Components/OptionPanel/OptionPanel"




export default function Chat(){
    return(
        <Box display="flex" overflow="hidden">
            <OptionPanel/>
            <Menu/>
            <ChatPanel/>
        </Box>
    )
}