import { useContext } from "react";

import { Box, Center, Avatar, VStack, Tooltip, Button } from "@chakra-ui/react";
import {BsChatDotsFill, BsFillPersonFill} from "react-icons/bs";

import PageContext from "../../../../context/PageProvider";

export default function OptionPanel(){
    const { setPage }:any = useContext(PageContext)

    return(
        <Box h="100vh" w="4%"   bg="#FFFFFF" display="flex" position="relative" justifyContent="center" borderRight="1px solid #F5F3F4" >
            <Center fontFamily="logo" color="#E5383B" fontSize="xl" position="absolute">
                CwF
            </Center>
            <VStack  spacing="15px">
                <Tooltip label="Chats" placement="right">
                    <Button mt="3rem" variant="unstyled" p="auto" >
                        <BsChatDotsFill color="#BA181B" fontSize="2rem" onClick={() => setPage("chats")} />
                    </Button>
                </Tooltip>
                <Tooltip label="People" placement="right" >
                    <Button variant="unstyled" p="auto">
                        <BsFillPersonFill  color="#BA181B" fontSize="2rem" onClick={() => setPage("contacts")} />
                    </Button>
                </Tooltip>
            </VStack>
            <Center position="absolute" bottom="1%">
                <Avatar cursor="pointer" onClick={() => setPage("profile")}/>
            </Center>
        </Box>
    )
}
