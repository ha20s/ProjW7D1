import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './componenets/Home.jsx'
import Profile from './componenets/Profile.jsx'
import Login from './componenets/Login.jsx'
import Sign from './componenets/Sign.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/profile/:id",
    element: <Profile></Profile>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/sign",
    element: <Sign></Sign>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
