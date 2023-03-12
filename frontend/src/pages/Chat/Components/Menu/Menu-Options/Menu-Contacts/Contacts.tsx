import { Box, Input, VStack, Text } from "@chakra-ui/react"
import Contact from "./Contact"
import { useEffect, useState, useRef } from "react"
import axios, { AxiosResponse } from "axios";

export default function Contacts(){
    const [users, setUsers] = useState<any | []>([])

    

    const handleSearchUser = (event: any) => {
        if(event.target.value === ""){
            setUsers({})
        }else{
            axios.get("http://localhost:5000/api/v1/users/" + event.target.value, {withCredentials: true})
            .then((response) => {
                setUsers(response.data)
            
            })
        }
    }

    return(
        <Box>
            <Text fontSize="2xl">Contacts</Text>
            <VStack >
                <Input placeholder="Search user" my="1rem" onChange={handleSearchUser} />
            </VStack>
            {users.length > 0 &&
                users.map((user: any, i: any) => (
                    <Contact key={i} user={user} />
                ))
            }
        </Box>
    )
}