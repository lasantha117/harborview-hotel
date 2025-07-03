import React from 'react';
import ReactDOM from 'react-dom/client';
// Use HashRouter for GitHub Pages compatibility
import { HashRouter } from 'react-router-dom';
import App from './App';

// Create the root element for React rendering.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component wrapped in HashRouter.
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
