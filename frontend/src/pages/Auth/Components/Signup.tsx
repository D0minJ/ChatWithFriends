import React, { useState } from 'react'

import { FormControl, FormLabel, VStack, Input, Button, HStack, InputGroup, InputRightElement, Tooltip } from '@chakra-ui/react'

import {BsCheck} from 'react-icons/bs'
import {IoWarning} from 'react-icons/io5'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

import useValidate from '../../../hooks/useValidate'


export default function Signup(props: any){
    const [show, setShow] = useState(false)
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const errors = useValidate({firstname: fname.trim(), lastname: lname.trim(), email: email.trim(), password: password.trim()})!
   
    
    return(
        <form onSubmit={(e) => props.registerSubmit(e, {firstname: fname, lastname: lname, email: email, password: password}, errors)} autoComplete="off">
            <VStack>
                <HStack>
                    <FormControl id='firstname'>
                        <FormLabel>Firstname</FormLabel>
                        <InputGroup>
                            <Input type='text' 
                                placeholder='Firstname' 
                                size='lg' 
                                bg='white' 
                                borderRadius='18px' 
                                focusBorderColor='focusRed' 
                                autoComplete='off' 
                                onChange={(e: React.ChangeEvent<HTMLInputElement> ) => setFname(e.target.value)}/>

                            {
                                (errors.firstname !== undefined && fname.length > 0 ) &&
                                    <Tooltip hasArrow placement='right' bg="errorMsg" label={errors.firstname} >
                                        <InputRightElement children={<IoWarning size='30px' color='red'  />} borderRadius='18px' boxSize="45px"  />
                                    </Tooltip>
                            }

                            {
                                errors.firstname === undefined &&
                                    <InputRightElement children={<BsCheck size='30px' color='green'  />} borderRadius='18px' boxSize="45px"  />
                            }

                        </InputGroup>
                    </FormControl>

                    <FormControl id='lastname'>
                        <FormLabel>Lastname</FormLabel>
                        <InputGroup>
                            <Input type='text' 
                                placeholder='Lastname' 
                                size='lg' 
                                bg='white' 
                                borderRadius='18px' 
                                focusBorderColor='focusRed'  
                                autoComplete='off' 
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLname(e.target.value)}/>

                            {
                                (errors.lastname !== undefined && lname.length > 0 ) &&
                                    <Tooltip hasArrow placement='right' bg="errorMsg" label={errors.lastname} >
                                        <InputRightElement children={<IoWarning size='30px' color='red'  />} borderRadius='18px' boxSize="45px"  />
                                    </Tooltip>
                            }

                            {
                                errors.lastname === undefined &&
                                    <InputRightElement children={<BsCheck size='30px' color='green'  />} borderRadius='18px' boxSize="45px"  />
                            }
                            
                        </InputGroup>
                    </FormControl>
                </HStack>

                <FormControl id='email' >
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                        <Input type='text' 
                            placeholder='Email' 
                            size='lg' 
                            bg='white' 
                            borderRadius='18px' 
                            focusBorderColor='focusRed'  
                            autoComplete='off' 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>

                        {
                            (errors.email !== undefined && email.length > 0 ) &&
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

                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input type={show ? 'text' : 'password'} 
                            placeholder='Password' 
                            size='lg' 
                            bg='white' 
                            borderRadius='18px' 
                            mb='2rem' 
                            focusBorderColor='focusRed'  
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>

                        {
                            (errors.password !== undefined && password.length > 0 ) &&
                                <Tooltip hasArrow placement='right' bg="errorMsg" label={errors.password} >
                                    <InputRightElement children={<IoWarning size='30px' color='red'  />} borderRadius='18px' boxSize="45px" right="30px" />
                                </Tooltip>
                        }

                        {
                            errors.password === undefined &&
                                <InputRightElement children={<BsCheck size='30px' color='green'  />} borderRadius='18px' boxSize="45px" right="30px"  />
                        }

                        <InputRightElement boxSize="45px" borderRadius="18px"  >
                            <Button size="45px"  onClick={() => setShow(!show)} children={ show ? <AiOutlineEyeInvisible size="30px"  /> : <AiOutlineEye size="30px" /> } variant="unstyled" />
                        </InputRightElement>
                    </InputGroup>  
                </FormControl>
                <Button size="lg" borderRadius='18px' type='submit' colorScheme="red" w='100%' >
                    Sign Up
                </Button>
            </VStack>
        </form>
    )
}