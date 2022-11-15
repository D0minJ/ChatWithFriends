import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import Auth from './pages/Auth/Auth';
import Error from './pages/Error/Error';
import Chat from './pages/Chat/Chat';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "./themes/theme"
import "@fontsource/pacifico"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat/>,
  },
  {
    path: "/auth",
    element: <Auth />,
  }
  // {
  //   path: "/error",
  //   element: <Error />,
  // }
])



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
);


