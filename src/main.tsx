
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { useEffect } from 'react'
import { useLanguage } from './contexts/LanguageContext.tsx'

// Component to handle document direction
const DirectionHandler = () => {
  const { direction, currentLanguage } = useLanguage();
  
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = currentLanguage.code;
  }, [direction, currentLanguage]);
  
  return null;
}

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <DirectionHandler />
  </>
);
