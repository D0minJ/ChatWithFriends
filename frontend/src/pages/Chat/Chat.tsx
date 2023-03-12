import { Box } from "@chakra-ui/react"

import ChatPanel from "./Components/ChatPanel/ChatPanel"
import Menu from "./Components/Menu/Menu"
import OptionPanel from "./Components/OptionPanel/OptionPanel"

import { PageProvider } from "../../context/PageProvider"
import { ContactProvider } from "../../context/ContactProvider"

export default function Chat(){

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