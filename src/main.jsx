import { StrictMode } from 'react'
import './index.css'
import { RouterProvider } from "react-router";
import { router } from './routes/Routes.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from 'react-hot-toast';
import { createRoot } from 'react-dom/client';



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />


  </StrictMode>,
)



