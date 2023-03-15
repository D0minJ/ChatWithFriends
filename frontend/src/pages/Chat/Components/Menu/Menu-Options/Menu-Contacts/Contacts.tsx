import { Box, Input, VStack, Text, Spinner, Center } from "@chakra-ui/react"
import Contact from "./Contact"
import { useState } from "react"
import axios from "axios";

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
                <Input placeholder="Search user" my="1rem" onChange={handleSearchUser} />
            </VStack>
            {
                loading?
                    <Center>
                        <Spinner color="red" size="xl" mt="100%" />
                    </Center>
                    :
                    users.length > 0 &&
                        users.map((user: any, i: any) => (
                            <Contact key={i} user={user} />
                        )
                    )
                



            }
            
            
        </Box>
    )
}