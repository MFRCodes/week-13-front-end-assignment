import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

// On lines 1-5, files and components are imported from their directories. On line 8, an HTML element is declared. It has an ID known as 
// "root". It then brings about a root DOM node for the app. Line 9 puts the React component in the root DOM node. Line 12, takes note
// of issues in the app. And line 15 keeps track of how the app performs. 