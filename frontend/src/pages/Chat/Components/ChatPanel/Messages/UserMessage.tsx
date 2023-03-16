import { Avatar, Box, Flex, Tooltip } from "@chakra-ui/react"

export default function UserMessage(props:any){

    return(

        <Flex w="96%" mx="auto" pos="relative" justify="flex-end">
            <Flex margin="10px" w="35%" alignItems="flex-end" justify="flex-end" >
                <Tooltip placement="left" label={props.date}>
                    <Box bg="#E5383B" color="#FFFFFF" mr="0.5rem" px="1rem" py="0.5rem" fontSize="sm" borderRadius="20px"> 
                        {props.message}
                    </Box>
                </Tooltip>
                <Box position="relative">
                    <Avatar size="sm"  />
                </Box>
            </Flex>
        </Flex>
    )



}