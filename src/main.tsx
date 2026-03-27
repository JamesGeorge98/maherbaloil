import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import UpdateFavicon from './components/favicon.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UpdateFavicon />
    <App />
  </StrictMode>,
);