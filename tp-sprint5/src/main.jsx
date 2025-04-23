import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { FamiliarProvider } from './context/FamiliarContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FamiliarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FamiliarProvider>
  </React.StrictMode>
);


