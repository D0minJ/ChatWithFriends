import { Box } from "@chakra-ui/react"
import User from "./User";

const SAMPLE_DATA = [
    {
        username: "Mamm0n",
        lastMsg: "Whats up?",
        sendDate: "03/09"
    },
    {
        username: "Br0wnie",
        lastMsg: "fella u want some chckn nuggt?",
        sendDate: "06/30"
    },
    {
        username: "R0manian_GUY",
        lastMsg: "Want a new carpet?",
        sendDate: "09/11"
    },
    {
        username: "NOT_SCAM",
        lastMsg: "mmmm picks hot chicks ;)",
        sendDate: "02/10"
    }];

export default function Chats(){
    return(
        <Box>
            {SAMPLE_DATA.map((user) =>
                <User key={user.username} username={user.username} lastmsg={user.lastMsg} date={user.sendDate} />
            )}
        </Box>
    )
}