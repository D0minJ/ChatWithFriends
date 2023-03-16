import {useContext} from "react"

import { Avatar, Container, HStack, Text } from "@chakra-ui/react";

import ContactContext from "../../../../../../context/ContactProvider";

export default function User({username, friendID, lastmsg, date }: any){
    const { setContact }: any = useContext(ContactContext)


    return(
        <HStack bg="#FFFFFF" width="95%" h="4rem" mx="auto" mt="0.5rem" p="10px" position="relative" justify="space-between" borderRadius="6px" cursor="pointer" _hover={{background: "#F5F3F4"}} 
        onClick={() => setContact({friendID: friendID, username: username})} >
            <Avatar size="sm"/>
            <Container p="0">
                <Container p="0">
                    <Text fontSize="sm" fontWeight="bold">{username}</Text>
                    <Text fontSize="xs">{lastmsg}</Text>
                </Container>
            </Container>
            <Text fontSize="2xs" verticalAlign="top" >{date}</Text>
        </HStack>
    )
}