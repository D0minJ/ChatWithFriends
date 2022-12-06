
import { Box, Center, Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react"
import Login from "./Components/Login"
import Signup from "./Components/Signup"




export default function Auth(){
   
    return(
        <Box bg="#FFFFFF" w="100%" h="100vh">
            <Center>
                <Box fontFamily="logo" color="#E5383B" fontSize="6xl" mt="2rem" cursor="default">ChatWithFriends</Box>
                <Center bg="#F5F3F4" top="20%" position="absolute" borderRadius="18px" w="35rem" h="40rem">
                    <Tabs variant="soft-rounded" colorScheme="red" w="100%" isFitted>
                        <TabList mb="3rem" mx="1rem" >
                            <Tab borderRadius="18px" bg="#FFFFFF" mr="1rem">Login</Tab>    
                            <Tab borderRadius="18px" bg="#FFFFFF">Sign Up</Tab>
                        </TabList>
                        <TabPanels h="30rem" w="20rem">
                            <TabPanel>
                                <Login/>
                            </TabPanel>
                            <TabPanel>
                                <Signup/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Center>
            </Center>
        </Box>
    )

}