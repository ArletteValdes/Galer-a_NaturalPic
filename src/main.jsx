import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserProvider from './Context/UserContext';
import LikesProvider from './Context/LikesContext';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <LikesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </LikesProvider>
    </UserProvider>
  </React.StrictMode>,
);
