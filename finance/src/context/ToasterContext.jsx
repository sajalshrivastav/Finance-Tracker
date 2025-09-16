import React, { createContext, useContext, useState, useCallback } from 'react'

const ToastContext = createContext() // no default value

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  // ---------- add a toast ----------
  const addToast = useCallback(
    (message, type = 'info', duration = 3000) => {
      const id = Math.random().toString(36).substr(2, 9)
      setToasts((prev) => [...prev, { id, message, type, duration }])
      // auto‑remove after the given duration
      setTimeout(() => removeToast(id), duration)
    },
    [], // no external deps
  )

  // ---------- remove a toast ----------
  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  // Provider only supplies state‑management; UI is rendered elsewhere
  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}

// ---------- custom hook ----------
export const useToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) {
    // Throw a clear error – you’ll see this in the console if you ever forget to wrap something
    throw new Error('useToast must be used within a ToastProvider')
  }
  return ctx
}
