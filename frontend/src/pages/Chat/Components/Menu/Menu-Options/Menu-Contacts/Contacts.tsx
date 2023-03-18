import { Box, Input, VStack, Text, Spinner, Center } from "@chakra-ui/react"
import Contact from "./Contact"
import React, { useState } from "react"
import axios from "axios";

import { BsSearch } from "react-icons/bs"

export default function Contacts(){
    const [users, setUsers] = useState<any | []>([])
    const [loading, setLoading] = useState<any>(false)
    

    const handleSearchUser = (event: any) => {
        if(event.target.value === ""){
            setUsers({})
        }else{
            setLoading(true)
            axios.get("http://localhost:5000/api/v1/users/" + event.target.value, {withCredentials: true})
            .then((response) => {
                setUsers(response.data)
                setLoading(false)
            })
        }
    }

    return(
        <Box>
            <Box fontSize="2xl">Contacts</Box>
            <VStack >
                <Input placeholder="Search user" my="1rem" focusBorderColor="focusRed" onChange={handleSearchUser} />
            </VStack>
            {
                users.length === 0?
                    <VStack color="gray" mt="100%" fontSize="2xl">
                        <BsSearch/>
                        <Box cursor="default">Find new friends!</Box>
                    </VStack>
                    
                :
                <React.Fragment>
                    {loading?
                    <Center>
                        <Spinner color="red" size="xl" mt="100%" />
                    </Center>
                    :
                    users.length > 0 &&
                        users.map((user: any, i: any) => (
                            <Contact key={i} user={user} />
                        )
                    )}
                </React.Fragment>


                
            }
            
            
        </Box>
    )
}