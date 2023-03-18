import { Avatar, Box, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";




export default function FirstnameTab(){

    return(
        <AccordionItem w="20rem">
            <AccordionButton >
                <Box flex="1" textAlign="left">
                    Firstname
                </Box>
                <AccordionIcon/>
            </AccordionButton>
            <AccordionPanel>

            </AccordionPanel>

        </AccordionItem>

    )
}