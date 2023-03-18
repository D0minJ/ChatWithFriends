import { Avatar, Box, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";




export default function LastnameTab(){

    return(
        <AccordionItem w="20rem">
            <AccordionButton >
                <Box flex="1" textAlign="left">
                    Lastname
                </Box>
                <AccordionIcon/>
            </AccordionButton>
            <AccordionPanel>

            </AccordionPanel>

        </AccordionItem>

    )
}