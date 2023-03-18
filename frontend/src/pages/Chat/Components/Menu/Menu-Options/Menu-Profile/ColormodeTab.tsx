import { Avatar, Box, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";




export default function ColormodeTab(){

    return(
        <AccordionItem w="20rem">
            <AccordionButton >
                <Box flex="1" textAlign="left">
                    Color mode
                </Box>
                <AccordionIcon/>
            </AccordionButton>
            <AccordionPanel>

            </AccordionPanel>

        </AccordionItem>

    )
}