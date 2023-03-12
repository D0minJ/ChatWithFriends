import { useContext } from "react";
import {Box} from "@chakra-ui/react";
import Chats from "./Menu-Options/Chats/Chats";
import Profile from "./Menu-Options/Menu-Profile/Profile";
import Contacts from "./Menu-Options/Menu-Contacts/Contacts";
import PageContext from "../../../../context/PageProvider";




export default function Menu(){
    const {page}:any = useContext(PageContext)

    return(
        <Box h="100vh" w="19%" bg="#FFFFFF" borderRight="1px solid #F5F3F4" borderLeft="1px solid #F5F3F4" >
            {
                page === "chats" && 
                    <Chats/>
            }
            {
                page === "contacts" && 
                    <Contacts/>
            }
            {
                page === "profile" && 
                    <Profile/>
            }
        </Box>
    )
}

