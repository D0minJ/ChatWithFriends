import { useEffect, useState, useRef, useContext } from "react";
import { Box } from "@chakra-ui/react"
import User from "./User";
import axios from "axios";
import AuthContext from "../../../../../../context/AuthProvider";

export default function Chats(){
    const [chats, setChats] = useState<any | []>([]);
    const {auth}:any = useContext(AuthContext);
    const getChatsHistory = async () => {
        axios.get("http://localhost:5000/api/v1/chats", {withCredentials: true})
        .then((response) => {
            setChats(response.data)
            
        })
    }

    useEffect(() => {
        getChatsHistory();
    }, []);

    return(
        <Box>
            {chats.map((user: any, i: any) =>
                <User key={i} username={user.friendUsername} friendID={user.friendID} lastmsg={user.lastMessage} date={user.date} />
            )}
            
        </Box>
    )
}