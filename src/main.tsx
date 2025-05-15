import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import './index.css'

console.log("Actual BASE_URL in main.tsx:", import.meta.env.BASE_URL); // For debugging
createRoot(document.getElementById('root')).render(
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
    </BrowserRouter>
);
