import { useContext } from "react";

import {Avatar, Box, Button, Center, Text, VStack} from "@chakra-ui/react";
import {BiLogOut} from "react-icons/bi"
import axios from "axios";

import AuthContext from "../../../../../../context/AuthProvider";

export default function Profile(props: any){
    const { auth, setPersist }: any = useContext(AuthContext)
   

    const handleLogout = () => {
        axios.get("http://localhost:5000/api/v1/auth/logout", {withCredentials: true})
            .then(() => {
                setPersist(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return(
        <Box pos="relative" height="100%">
            <VStack>
                <Avatar size="2xl" mt="1rem"/>
                <Text>{auth.firstname} {auth.lastname}</Text>
            </VStack>
            <Center>
                <Button pos="absolute" bottom="2rem" colorScheme="red" color="white" onClick={handleLogout}>
                    <BiLogOut/> Log Out
                </Button>
            </Center>
        </Box>
    )
}