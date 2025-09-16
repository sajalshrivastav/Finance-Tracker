import React, { createContext, useContext, useState } from 'react'
import Toaster from '../components/Toaster'

const ToastContext = createContext()

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const addToast = (message, type, duration = 300000) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prev) => [...prev, { id, message, type, duration }])
    setTimeout(() => removeToast(id), duration)
  }
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }
  return (
    <ToastContext.Provider value={{ toasts, addToast }}>
      {children}
      <Toaster toasts={toasts} />
    </ToastContext.Provider>
  )
}
export const useToast = () => {
  const context = useContext(ToastContext)
  console.log('context ', context)
  if (!context) {
    console.log('Getting error for context provider')
    // throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
