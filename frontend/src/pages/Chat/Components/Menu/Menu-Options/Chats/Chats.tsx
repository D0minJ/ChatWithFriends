import { useEffect, useState } from "react";

import { Box, Center, Spinner } from "@chakra-ui/react"
import axios from "axios";

import User from "./User";

export default function Chats(){
    const [chats, setChats] = useState<any | []>([]);
    const [loading, setLoading] = useState<any>(false)

    const getChatsHistory = async () => {
        setLoading(true)
        axios.get("http://localhost:5000/api/v1/chats", {withCredentials: true})
            .then((response) => {
                setChats(response.data)
                setLoading(false)
            }
        )
    }

    useEffect(() => {
        getChatsHistory();
    }, []);

    return(
        <Box>
            <Box fontSize="2xl">Chats</Box>
            {
                loading ? 
                    <Center>
                        <Spinner color="red" size="xl" mt="100%" />
                    </Center>
                :
                    chats.map((user: any, i: any) =>
                        <User key={i} username={user.friendUsername} friendID={user.friendID} lastmsg={user.lastMessage} date={user.date} />
                    )
            }
        </Box>
    )
}