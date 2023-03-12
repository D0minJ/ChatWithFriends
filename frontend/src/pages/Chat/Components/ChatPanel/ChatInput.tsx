import { useRef } from "react"
import { HStack, Input, IconButton } from "@chakra-ui/react"
import {HiOutlineEmojiHappy} from "react-icons/hi"
import {MdOutlineAttachFile} from "react-icons/md"
import {AiOutlineSend} from "react-icons/ai"


export default function ChatInput({socket, userID, friendID, fromUsername, toUsername, }: any){
    const message: any = useRef("")
    
    

    const onSendMessage = (e: any) => {
        e.preventDefault();
        socket.emit("send message", userID, friendID, fromUsername, toUsername, message.current.value);
        message.current.value = "";

    }


    return(
        <form onSubmit={onSendMessage}>
            <HStack bg="#FFFFFF" w="100%" h="6rem" >
                <Input  bg="#FFFFFF" w="87%" ml="1rem" size="lg" ref={message} />
                <IconButton aria-label='Show emoticons' icon={<HiOutlineEmojiHappy size="20px"/>} variant="ghost" />
                <IconButton aria-label='Select file' icon={<MdOutlineAttachFile size="20px" />} variant="ghost" />
                <IconButton aria-label='Send message' icon={<AiOutlineSend size="20px" />} type="submit" />
            </HStack>
        </form>
    )
}