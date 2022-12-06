import { useState } from 'react'
import { FormControl, FormLabel, VStack, Input, Button, HStack, InputGroup, InputRightElement, Tooltip } from '@chakra-ui/react'
import {BsCheck} from 'react-icons/bs'
import {IoWarning} from 'react-icons/io5'
import useValidate from '../../../hooks/useValidate'



export default function Signup(props: any){
    const [Fname, setFname] = useState("")
    const [Lname, setLname] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const errors = useValidate({firstname: Fname.trim(), lastname: Lname.trim(), email: Email.trim(), password: Password.trim()})!
   


    return(
        <form onSubmit={e => e.preventDefault()}>
            <VStack>
                <HStack>
                    <FormControl id='firstname'>
                        <FormLabel>Firstname</FormLabel>
                        <InputGroup>
                            <Input type='text' placeholder='Firstname' size='lg' bg='white' borderRadius='18px' focusBorderColor='focusRed' autoComplete='off' onChange={(e) => setFname(e.target.value)}/>
                            {(errors.firstname.length > 0 && Fname.length > 0 ) &&
                                <Tooltip hasArrow placement='right' bg="errorMsg" label={errors.firstname} >
                                    <InputRightElement children={<IoWarning size='30px' color='red'  />} borderRadius='18px' boxSize="45px"  />
                                </Tooltip>
                            }
                            {errors.firstname === "" &&
                                <InputRightElement children={<BsCheck size='30px' color='green'  />} borderRadius='18px' boxSize="45px"  />
                            }
                        </InputGroup>
                    </FormControl>

                    <FormControl id='lastname'>
                        <FormLabel>Lastname</FormLabel>
                        <InputGroup>
                            <Input type='text' placeholder='Lastname' size='lg' bg='white' borderRadius='18px' focusBorderColor='focusRed'  autoComplete='off' onChange={(e) => setLname(e.target.value)}/>
                            {(errors.lastname.length > 0 && Lname.length > 0 ) &&
                                <Tooltip hasArrow placement='right' bg="errorMsg" label={errors.lastname} >
                                    <InputRightElement children={<IoWarning size='30px' color='red'  />} borderRadius='18px' boxSize="45px"  />
                                </Tooltip>
                            }
                            {errors.lastname === "" &&
                                <InputRightElement children={<BsCheck size='30px' color='green'  />} borderRadius='18px' boxSize="45px"  />
                            }
                            
                        </InputGroup>
                    </FormControl>
                </HStack>

                <FormControl id='email' >
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                        <Input type='email' placeholder='Email' size='lg' bg='white' borderRadius='18px' focusBorderColor='focusRed'  autoComplete='off' onChange={(e) => setEmail(e.target.value)}/>
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

                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input type='password' placeholder='Password' size='lg' bg='white' borderRadius='18px' mb='2rem' focusBorderColor='focusRed'  onChange={(e) => setPassword(e.target.value)}/>
                        {(errors.password.length > 0 && Password.length > 0 ) &&
                            <Tooltip hasArrow placement='right' bg="errorMsg" label={errors.password} >
                                <InputRightElement children={<IoWarning size='30px' color='red'  />} borderRadius='18px' boxSize="45px"  />
                            </Tooltip>
                        }
                        {errors.password === "" &&
                            <InputRightElement children={<BsCheck size='30px' color='green'  />} borderRadius='18px' boxSize="45px"  />
                        }
                    </InputGroup>  
                </FormControl>

                <Button size="lg" borderRadius='18px' type='submit' colorScheme="red" w='100%' >
                    Sign Up
                </Button>
            </VStack>
        </form>
    )
}