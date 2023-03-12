import ReactDOM from 'react-dom/client';
import React from "react"
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "./themes/theme"
import "@fontsource/pacifico"
import {AuthProvider}  from './context/AuthProvider';






const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
    <ChakraProvider theme={theme}>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </ChakraProvider>
  
  
);


