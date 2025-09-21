import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastProvider } from './context/ToasterContext.jsx'
import Toaster from './components/common/Toaster.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider>
      <App />
      <Toaster />
    </ToastProvider>
  </StrictMode>,
)
