import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import logo from './assets/logo.png';
import App from './App.jsx';
import './index.css';

const favicon = document.getElementById('app-favicon') || document.querySelector("link[rel~='icon']");
if (favicon) {
  favicon.type = 'image/png';
  favicon.href = logo;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);