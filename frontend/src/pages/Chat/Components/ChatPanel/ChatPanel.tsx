import { Box } from "@chakra-ui/react"
import ChatInput from "./ChatInput";
import Header from "./Header";
import MessagesPanel from "./MessagesPanel";


export default function ChatPanel(){
    return(
        <Box h="100vh" w="77%" bg="#FFFFFF" >
            <Header/>
            <MessagesPanel/>
            <ChatInput/>
            
        </Box>

    );
}