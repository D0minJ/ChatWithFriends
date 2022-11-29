import { Avatar, Box, Container, Flex, HStack, Text } from "@chakra-ui/react";

export default function User(props: any){
    return(
        <HStack bg="#CDC1FF" width="95%" h="4rem" mx="auto" mt="0.5rem" p="10px" position="relative" justify="space-between" borderRadius="6px">
            <Avatar size="sm"/>
            <Container p="0">
                <Container p="0">
                    <Text fontSize="sm" fontWeight="bold">{props.username}</Text>
                    <Text fontSize="xs">{props.lastmsg}</Text>
                </Container>
            </Container>
            <Text fontSize="2xs" verticalAlign="top" position="relative" bottom="20px">{props.date}</Text>
        </HStack>
    )
}