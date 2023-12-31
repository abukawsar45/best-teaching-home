import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/router.jsx';
import AuthProvider from './components/providers/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient()

const ab =ReactDOM.createRoot(document.getElementById('root'))
// console.log(ab)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
