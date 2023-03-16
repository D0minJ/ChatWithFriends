import { Avatar, Box, Flex, Tooltip } from "@chakra-ui/react"

export default function FriendMessage(props:any){

    return(
        <Box w="96%" mx="auto" pos="relative">
            <Flex margin="10px" w="35%" alignItems="flex-end">
                <Box position="relative">
                    <Avatar size="sm"  />
                </Box>
                <Tooltip placement="right" label={props.date} variant="red">
                    <Box bg="#F5F3F4" color="#0B090A" ml="0.5rem" px="1rem" py="0.5rem" fontSize="sm" borderRadius="20px"> 
                        {props.message}
                    </Box>
                </Tooltip>
            </Flex>
        </Box>
    )
    

}