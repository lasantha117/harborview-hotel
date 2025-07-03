import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Create the root element for React rendering.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component wrapped in BrowserRouter to enable routing.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
