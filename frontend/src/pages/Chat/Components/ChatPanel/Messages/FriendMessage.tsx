import { Avatar, Box, Container, Flex } from "@chakra-ui/react"

export default function FriendMessage(){
    return(
        <Box w="96%" mx="auto" pos="relative">
            <Flex margin="10px" w="35%" alignItems="flex-end">
                <Box position="relative">
                    <Avatar size="sm"  />
                </Box>
                <Box bg="#F5F3F4" color="#0B090A" ml="0.5rem" p="1rem" borderRadius="20px"> 
                
                </Box>
            </Flex>
        </Box>
    )
    

}