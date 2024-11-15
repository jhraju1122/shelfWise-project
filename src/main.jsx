import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Pages/Main/Main.jsx';
import Login from './components/Pages/Login/Login.jsx';
  
const router = createBrowserRouter([
  {
    path: "/",
    element:    <Main></Main> ,
  },
  {
    path: "/login",
    element: <Login></Login> ,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
