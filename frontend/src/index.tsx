import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import Auth from './pages/Auth/Auth';
import Error from './pages/Error/Error';
import Chat from './pages/Chat/Chat';
import { ChakraProvider } from '@chakra-ui/react'


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Chat/>,
  // },
  {
    path: "/register",
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
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
);


