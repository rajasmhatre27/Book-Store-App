import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom';
import router from './routers/router.jsx'
import AuthProvider from './contects/AuthProvider.jsx';
//import ReactDOM from 'react-dom';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
