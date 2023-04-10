import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from './Root';
import Home from './components/Home/Home';
import PathErr from './components/404/PathErr';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: 'error in code',
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      
    ]
  },
  {
    path: '*',
    element: <PathErr></PathErr>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
