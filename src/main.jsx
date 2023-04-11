import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from './Root';
import Home from './components/Home/Home';
import PathErr from './components/404/PathErr';
import JobDetail from './components/JobDetail/JobDetail';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';




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
      {
        path: 'jobs/:id',
        element: <JobDetail></JobDetail>,
        loader: () => fetch('/jobs.json') 
      },
      {
        path: 'applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: 'blog',
        element: <Blogs></Blogs>,
        loader: () => fetch('/qnas.json')
      }
      
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
