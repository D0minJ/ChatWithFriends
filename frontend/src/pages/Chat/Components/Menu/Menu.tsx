import {Box, Center} from "@chakra-ui/react";
import Chats from "./Menu-Options/Chats/Chats";




export default function Menu(){
    return(
        <Box h="100vh" minW="380px" maxW="380px" bg="#F5F3F4" >
            <Chats/>

        </Box>
    )


}