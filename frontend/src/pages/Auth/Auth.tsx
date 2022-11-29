import { Box, Center, Tabs, TabList, TabPanels, Tab, TabPanel, Spacer} from '@chakra-ui/react'
import Login from './Components/Login'
import Signup from './Components/Signup'


export default function Auth(){
    return(
        <Box bg='#F5EFFF' w='100%' h="100vh">
            <Center>
                <Box fontFamily="logo" color="#7371FC" fontSize="6xl" mt="2rem" >ChatWithFriends</Box>
                <Center bg='#CDC1FF' top='20%' position='absolute' borderRadius='6px' w='30rem' h='35rem'>
                    <Tabs variant='soft-rounded' colorScheme='purple' isFitted >
                        <TabList mb='3rem'>
                            <Tab>Login</Tab>
                            <Spacer/>
                            <Tab>Sign Up</Tab>
                        </TabList>
                        <TabPanels h='20rem'>
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