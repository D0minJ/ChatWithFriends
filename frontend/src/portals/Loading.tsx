import ReactDOM from "react-dom"
import { Center, Spinner } from "@chakra-ui/react"


export default function Loading({showLoading}: any){
    if(!showLoading) {
        return null
    }

    return ReactDOM.createPortal(
        <Center w="100%" h="100vh">
            <Spinner color="red"/>
        </Center>,
        document.getElementById("loading")!
    )
    
}