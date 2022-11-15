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



export default function Signup(){
    return(
        <VStack>
            <FormControl id='username'>
                <FormLabel>Username</FormLabel>
                <Input type='text' placeholder='Username' size='lg' w='20rem' bg='white' borderRadius='20px' />
            </FormControl>
            <FormControl id='email' >
                <FormLabel >Email</FormLabel>
                <Input type='email' placeholder='Email' size='lg' w='20rem' bg='white' borderRadius='20px' />  
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='Password' size='lg' w='20rem' bg='white' borderRadius='20px' mb='2rem' />
            </FormControl>
            <Button>
                Sign Up
            </Button>
        </VStack>
    )
}