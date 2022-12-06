import { Box, HStack, Input, IconButton } from "@chakra-ui/react"
import {HiOutlineEmojiHappy} from "react-icons/hi"
import {MdOutlineAttachFile} from "react-icons/md"
import {AiOutlineSend} from "react-icons/ai"

export default function ChatInput(){
    return(
        <HStack bg="#F5F3F4" w="100%" h="6rem" >
            <Input  bg="#FFFFFF" w="87%" ml="1rem" size="lg" />
            <IconButton aria-label='Show emoticons' icon={<HiOutlineEmojiHappy size="20px"/>} variant="ghost" />
            <IconButton aria-label='Select file' icon={<MdOutlineAttachFile size="20px" />} variant="ghost" />
            <IconButton aria-label='Send message' icon={<AiOutlineSend size="20px" />} />
        </HStack>
    )
}