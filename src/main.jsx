import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { startLoader } from '../loader.js'; 
import App from './App.jsx';

function Root() {
  const [isLoaded, setIsLoaded] = useState(false); 

  // loader handeler
  useEffect(() => {
    startLoader(); 
    setTimeout(() => {
      setIsLoaded(true); 
    }, 3000); 
  }, []);

  return isLoaded ? (
    <div className="app-container show">  {/* add "show" class to fade in */}
      <App />
    </div>
  ) : null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />  
  </StrictMode>
);
