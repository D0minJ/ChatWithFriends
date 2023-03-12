import {useContext} from "react"

import { Avatar, Flex, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from "@chakra-ui/react";
import {FiMoreVertical} from "react-icons/fi"

import ContactContext from "../../../../../../context/ContactProvider";


export default function Contact({user}: any){
    const { setContact }: any = useContext(ContactContext)


    return(
        <Flex bg="#FFFFFF" 
            alignItems="center" 
            p="0.5rem" 
            cursor="pointer"
            _hover={{background: "#F5F3F4"}} 
            onClick={() => setContact({friendID: user.userID, username: user.firstname + " " + user.lastname})}>

            <Avatar size="sm" />
            <Text ml="1rem">{user.firstname} {user.lastname}</Text>
            <Spacer />
            <Menu>
                <MenuButton fontSize="xl"> <FiMoreVertical /> </MenuButton>
                <MenuList>
                    <MenuItem>Block user</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}