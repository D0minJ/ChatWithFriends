import { Box } from "@chakra-ui/react"
import ChatInput from "./ChatInput";
import Header from "./Header";
import MessagesPanel from "./MessagesPanel";


export default function ChatPanel(){
    return(
        <Box h="100vh"  minW="77%" bg="#DEC0F1" >
            <Header/>
            <MessagesPanel/>
            <ChatInput/>
            
        </Box>

    );
}