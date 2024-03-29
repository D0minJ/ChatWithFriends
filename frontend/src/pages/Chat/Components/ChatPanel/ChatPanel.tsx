import React, { useContext } from "react";

import { Box, Center } from "@chakra-ui/react"

import ChatInput from "./ChatInput";
import Header from "./Header";
import MessagesPanel from "./MessagesPanel";
import ContactContext from "../../../../context/ContactProvider";
import AuthContext from "../../../../context/AuthProvider";

export default function ChatPanel(){
    const { contact }: any = useContext(ContactContext);
    const {auth}:any = useContext(AuthContext);
    
    return(
        <Box h="100vh" w="77%" bg="#FFFFFF" borderLeft="1px solid #F5F3F4" pos="relative" >
            {Object.keys(contact).length !== 0 &&
                <React.Fragment>
                    <Header username={contact.username} />
                    <MessagesPanel socket={auth.socket} userID={auth.userID}/>
                    <ChatInput 
                        socket={auth.socket} 
                        userID={auth.userID} 
                        friendID={contact.friendID} 
                        fromUsername={auth.firstname + " " + auth.lastname}
                        toUsername={contact.username} 
                        />
                </React.Fragment>
            }
            {
                Object.keys(contact).length === 0 &&
                    <Center fontFamily="logo" color="#E5383B" fontSize="4xl"> Chat With Friends! </Center>
            }
        </Box>
    );
}