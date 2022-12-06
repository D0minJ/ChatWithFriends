import { useState } from 'react'
import { FormControl, FormLabel, VStack, Input, Button, InputGroup, InputRightElement, Tooltip } from '@chakra-ui/react'
import { Form } from 'react-router-dom'
import {BsCheck} from 'react-icons/bs'
import {IoWarning} from 'react-icons/io5'
import useValidate from '../../../hooks/useValidate'

export default function Login(){
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const errors = useValidate({email: Email.trim(), password: Password.trim()})!

    


  

    return(
        <form onSubmit={e => e.preventDefault()}>
            <VStack>
                <FormControl id='email'>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                        <Input type='email' placeholder='Email' size='lg' bg='white'  borderRadius='18px' focusBorderColor='focusRed' autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
                        {(errors.email.length > 0 && Email.length > 0 ) &&
                            <Tooltip hasArrow placement='right' bg="errorMsg" label={errors.email} >
                                <InputRightElement children={<IoWarning size='30px' color='red'  />} borderRadius='18px' boxSize="45px"  />
                            </Tooltip>
                        }
                        {errors.email === "" &&
                            <InputRightElement children={<BsCheck size='30px' color='green'  />} borderRadius='18px' boxSize="45px"  />
                        }
                    </InputGroup>      
                </FormControl>
                <FormControl id='password'>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input type='password' placeholder='Password' size='lg' bg='white' borderRadius='18px' mb='2rem' focusBorderColor='focusRed' onChange={(e) => setPassword(e.target.value)}/>
                    </InputGroup>
                </FormControl>
                <Button type='submit' size='lg' borderRadius='18px'  colorScheme="red" w='100%'>
                    Login
                </Button>
            </VStack>
        </form>

    )

}