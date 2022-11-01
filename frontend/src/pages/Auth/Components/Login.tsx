import { useState } from 'react'
import 
{ 
    Box,
    Center,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    VStack,
    Input,
    InputGroup,
    InputRightElement,
    Button

} from '@chakra-ui/react'



export default function Login(){


    return(
        <VStack>
            <FormControl id='email'>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='Email' focusBorderColor='red' size='lg' w='20rem'/>      
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='Password' size='lg' />
            </FormControl>
            <Button>
                Login
            </Button>
        </VStack>

    )

}