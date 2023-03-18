import { useEffect, useState, useContext, useRef } from "react"

import { Box } from "@chakra-ui/react"
import axios from "axios"

import FriendMessage from "./Messages/FriendMessage"
import UserMessage from "./Messages/UserMessage"
import ContactContext from "../../../../context/ContactProvider"

export default function MessagesPanel({socket, userID}: any){
    const chatBottom = useRef<null | HTMLDivElement>(null);
    const { contact }: any = useContext(ContactContext);
    const [content, setContent]: any  = useState([])

    useEffect(()=>{
        setContent([])
        axios.get("http://localhost:5000/api/v1//messages/" + contact.friendID, {withCredentials: true})
         .then((response) => {
            setContent([...response.data]);
         })
    }, [contact])
    

    useEffect(() => {
        socket.on("receive message", ({from, to, content}: any) => {
            if(from === contact.friendID || from === userID) {
                setContent((prev: any) => [...prev, {from: from, to: to, body: content}]);
            } else {

            }
        });
    }, [socket])

    useEffect(() => {
        chatBottom.current?.scrollIntoView({behavior: 'smooth'});
      }, [content])

    return(
        <Box w="100%" h="calc(100vh - 12rem)" overflow="scroll" overflowX="hidden">
            {content.map((m: any, i: any) => {
                if(m.from === userID) {
                    return <UserMessage key={i} message={m.body} date={m.date} />
                }
                if(m.from !== userID) {
                    return <FriendMessage key={i} message={m.body} date={m.date} />   
                }
            })}
            <div ref={chatBottom} />
        </Box>
    )
}