import { useState } from 'react'
import { FormControl, FormLabel, VStack, Input, Button } from '@chakra-ui/react'



export default function Login(){


    return(
        <VStack>
            <FormControl id='email'>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='Email' size='lg' w='20rem' bg='white' borderRadius='20px'/>      
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='Password' size='lg' w='20rem' bg='white' borderRadius='20px' mb='2rem' />
            </FormControl>
            <Button>
                Login
            </Button>
        </VStack>

    )

}