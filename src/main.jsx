import { StrictMode } from 'react'
import './index.css'
import { RouterProvider } from "react-router";
import { router } from './routes/Routes.jsx';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
