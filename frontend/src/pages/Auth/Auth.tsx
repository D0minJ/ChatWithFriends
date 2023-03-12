import { useState, useContext } from 'react'

import { Box, Center, VStack, Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react"

import axios from "axios";

import Login from "./Components/Login"
import Signup from "./Components/Signup"
import AuthContext from "../../context/AuthProvider"



export default function Auth(){
    const [errMsg, setErrMsg] = useState("")
    const { setPersist }: any = useContext(AuthContext)
       
    const handleRegisterSubmit = (e: any, data: any, errors: any) => {
        e.preventDefault();
         
        if(Object.values(errors).length !== 0) {
            setErrMsg(Object.values(errors).at(0) as string)
        } else {
            axios.post("http://localhost:5000/api/v1/auth/register", JSON.stringify(data), {headers: { 'Content-Type': 'application/json'}, withCredentials: true })
                .then(() => {
                    setPersist(true);
                })
                .catch((error: any) => {
                    if(error.response.status === 400) {
                        setErrMsg("Email already exists")
                    }    
                }
            )
        }
    } 


    const handleLoginSubmit = (e: any, data: any, errors: any) =>{
        e.preventDefault();
      
        if(Object.values(errors).length !== 0) {
            setErrMsg(Object.values(errors).at(-1) as string)
        } else {
            axios.post("http://localhost:5000/api/v1/auth/login", JSON.stringify(data), {headers: { 'Content-Type': 'application/json'}, withCredentials: true })
                .then(() => {
                    setPersist(true);
                })
                .catch((error: any) => {
                    if(error.response.status === 400) {
                        setErrMsg("Incorrect password or Email")
                    } else {
                        console.log(error)
                    }
                }
            )
        }
    } 
   
    return(
        <Box bg="#FFFFFF" w="100%" h="100vh">
            <Center>
                <Box fontFamily="logo" color="#E5383B" fontSize="6xl" mt="2rem" cursor="default">ChatWithFriends</Box>
                <VStack bg="#F5F3F4" top="20%" position="absolute" borderRadius="18px" w="35rem" h="40rem">

                    {errMsg !== "" &&
                        <Center w="95%" height="4.5rem" color="#BA181B" bg="rgba(229, 56, 59, 0.5)"  my="2rem" padding="1rem" border="2px solid #BA181B" borderRadius="18px" >
                            {errMsg}
                        </Center>
                    }

                    <Tabs variant="soft-rounded" colorScheme="red" w="100%" mt="2rem" isFitted>
                        <TabList mb="3rem" mx="1rem" >
                            <Tab borderRadius="18px" bg="#FFFFFF" mr="1rem">Login</Tab>    
                            <Tab borderRadius="18px" bg="#FFFFFF">Sign Up</Tab>
                        </TabList>
                        <TabPanels h="25rem" w="20rem">
                            <TabPanel>
                                <Login loginSubmit={handleLoginSubmit}/>
                            </TabPanel>
                            <TabPanel>
                                <Signup registerSubmit={handleRegisterSubmit}/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </VStack>
            </Center>
        </Box>
    )
}