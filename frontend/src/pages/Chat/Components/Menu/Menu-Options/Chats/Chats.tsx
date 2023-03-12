import { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react"
import axios from "axios";

import User from "./User";

export default function Chats(){
    const [chats, setChats] = useState<any | []>([]);

    const getChatsHistory = async () => {
        axios.get("http://localhost:5000/api/v1/chats", {withCredentials: true})
            .then((response) => {
                setChats(response.data)
            }
        )
    }

    useEffect(() => {
        getChatsHistory();
    }, []);

    return(
        <Box>
            {
                chats.map((user: any, i: any) =>
                    <User key={i} username={user.friendUsername} friendID={user.friendID} lastmsg={user.lastMessage} date={user.date} />
                )
            }
        </Box>
    )
}