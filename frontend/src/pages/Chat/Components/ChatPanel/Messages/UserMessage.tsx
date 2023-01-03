import { Avatar, Box, Container, Flex } from "@chakra-ui/react"

export default function UserMessage(){
    return(
        <Flex w="96%" mx="auto" pos="relative" justify="flex-end">
            <Flex margin="10px" w="35%" alignItems="flex-end" justify="flex-end" >
                <Box bg="#E5383B" color="#FFFFFF" mr="0.5rem" p="1rem" borderRadius="20px"> 
                
                </Box>
                <Box position="relative">
                    <Avatar size="sm"  />
                </Box>
            </Flex>
            
        </Flex>
    )



}