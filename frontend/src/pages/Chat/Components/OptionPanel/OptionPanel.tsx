import { Box, Center, Container, Input, IconButton, Avatar, VStack, Tooltip } from "@chakra-ui/react";
import {BsChatDotsFill, BsFillPersonFill} from "react-icons/bs";
import {AiFillSetting} from "react-icons/ai";

export default function OptionPanel(){
    return(
        <Box h="100vh" w="4%"   bg="#FFFFFF" display="flex" position="relative" justifyContent="center" >
            <Center fontFamily="logo" color="#E5383B" fontSize="xl" position="absolute">
                CwF
            </Center>
            <VStack justify="center" spacing="15px">
                <Tooltip label="Chats" placement="right">
                    <IconButton aria-label='Show chats' icon={<BsChatDotsFill size="sm" color="#BA181B" />} size="sm" bg="#FFFFFF" variant="unstyled" />
                </Tooltip>
                <Tooltip label="People" placement="right">
                    <IconButton aria-label='Show users' icon={<BsFillPersonFill size="sm" color="#BA181B" />} size="sm" bg="#FFFFFF" variant="unstyled" />
                </Tooltip>
                <Tooltip label="Settings" placement="right">
                    <IconButton aria-label='Show settings' icon={<AiFillSetting size="sm" color="#BA181B" />} size="sm" bg="#FFFFFF" variant="unstyled" />
                </Tooltip>
                
                
                
            </VStack>
            <Center position="absolute" bottom="1%">
                <Avatar />
            </Center>

        </Box>
    )

}
