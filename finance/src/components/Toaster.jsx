import React from 'react'
import {
  XIcon,
  CheckCircle2,
  CircleXIcon,
  Info,
  LucideShieldClose,
  Icon,
} from 'lucide-react'
import { useToast } from '../context/ToasterContext'

const getIcon = (type) => {
  switch (type) {
    case 'success':
      return <CheckCircle2 size={20} className="text-emerald-600" />
    case 'error':
      return <CircleXIcon size={20} className="text-red-600" />
    case 'warning':
      return <LucideShieldClose size={20} className="text-amber-600" />
    case 'info':
    default:
      return <Info size={20} className="text-blue-600" />
  }
}

const Toaster = () => {
  // Get the list of toasts **and** the remover from the same context
  const { toasts, removeToast } = useToast()

  // Return a *function* that removes the toast when the button is clicked
  const handleDeleteToast = (id) => () => {
    removeToast(id)
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            flex items-center px-4 py-2 w-96 max-w-xs
            rounded-lg shadow-lg border-1 border-amber-50 bg-white
            transform transition-all duration-300 ease-in-out
          `}
        >
          {/* Icon */}
          <div
            className={`p-2 mt-2 mb-2 mr-2 rounded-lg shadow 
            ${toast.type === 'success' ? 'bg-emerald-100' : ''}
            ${toast.type === 'error' ? 'bg-red-100' : ''}
            ${toast.type === 'warning' ? 'bg-amber-100' : ''}
            ${toast.type === 'info' ? 'bg-blue-100' : ''}
            `}
          >
            <div className="">{getIcon(toast.type)}</div>
          </div>

          {/* Message */}
          <span className="flex-1">{toast.message}</span>

          {/* Close button */}
          <button
            onClick={handleDeleteToast(toast.id)}
            className="p-1 hover:bg-gray-200 rounded"
          >
            <XIcon size={16} />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Toaster
