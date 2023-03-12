import { Avatar, HStack, Text } from "@chakra-ui/react"


export default function Header({username}: any){
    
    return(
        <HStack bg="#FFFFFF" w="100%" h="6rem" >
            <Avatar ml="1rem"/>
            <Text> {username} </Text>
        </HStack>
    )


}