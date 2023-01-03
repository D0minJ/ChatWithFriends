import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
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
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);


