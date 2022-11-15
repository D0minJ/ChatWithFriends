import { Box, Container, Input } from "@chakra-ui/react"


export default function Sidebar(){
    return(
        <Box bg="#CDC1FF" display="inline-block" h="60rem" pos="relative" bottom="5vh" >
            <Input type="text" placeholder="Search"/>
            <Container>
                
            </Container>
        </Box>
    )

}