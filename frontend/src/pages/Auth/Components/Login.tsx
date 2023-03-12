import { useState } from 'react'

import { FormControl, FormLabel, VStack, Input, Button, InputGroup, InputRightElement, Tooltip } from '@chakra-ui/react'
import {BsCheck} from 'react-icons/bs'
import {IoWarning} from 'react-icons/io5'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

import useValidate from '../../../hooks/useValidate'

export default function Login(props: any){
    const [show, setShow] = useState(false)
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const errors = useValidate({email: Email.trim(), password: Password.trim()})!

    

    return(
        <form onSubmit={(e) => props.loginSubmit(e, {email: Email, password: Password}, errors)} autoComplete="off">
            <VStack>
                <FormControl id='email'>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                        <Input type='text' 
                            placeholder='Email' 
                            size='lg' 
                            bg='white'  
                            borderRadius='18px' 
                            focusBorderColor='focusRed' 
                            autoComplete='off' 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />

                        {
                            (errors.email !== undefined && Email.length > 0 ) &&
                                <Tooltip hasArrow placement='right' bg="errorMsg" label={errors.email} >
                                    <InputRightElement children={<IoWarning size='30px' color='red'  />} borderRadius='18px' boxSize="45px"  />
                                </Tooltip>
                        }
                        {
                            errors.email === undefined &&
                                <InputRightElement children={<BsCheck size='30px' color='green'  />} borderRadius='18px' boxSize="45px"  />
                        }

                    </InputGroup>      
                </FormControl>
                <FormControl id='password'>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input type={show ? 'text' : 'password'} 
                            placeholder='Password' 
                            size='lg' 
                            bg='white' 
                            borderRadius='18px' 
                            mb='1rem' 
                            focusBorderColor='focusRed' 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                        <InputRightElement boxSize="45px" borderRadius="18px"  >
                            <Button size="45px"  onClick={() => setShow(!show)} children={ show ? <AiOutlineEyeInvisible size="30px"  /> : <AiOutlineEye size="30px" /> } variant="unstyled" />
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
            </VStack>
            <Button type='submit' size='lg' borderRadius='18px'  colorScheme="red" w='100%'>
                Login
            </Button>
        </form>
    )
}