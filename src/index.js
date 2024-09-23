import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import reportWebVitals from './reportWebVitals';
import App from './App'; // Import App

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App /> {/* Render the App component which now contains all routing */}
  </React.StrictMode>
);
reportWebVitals();