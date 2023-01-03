import { Box } from "@chakra-ui/react"
import {useState, useEffect} from "react"
import ChatPanel from "./Components/ChatPanel/ChatPanel"
import Menu from "./Components/Menu/Menu"
import OptionPanel from "./Components/OptionPanel/OptionPanel"
import axios from "axios"



export default function Chat(){

    useEffect(() => {

        // axios.get("http://localhost:5000/api/v1/token/renewtoken")
        // .then((response) => {
        //     console.log(response.data)
        //     console.log("IT WORKS")
        // })


    })



    return(
        <Box display="flex" >
            <OptionPanel/>
            <Menu/>
            <ChatPanel/>
        </Box>
    )
}