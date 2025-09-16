import {
  LucideShieldClose,
  CheckCircle2,
  X,
  CircleXIcon,
  Info,
  XIcon,
} from 'lucide-react'
import { useToast } from '../context/ToasterContext'

const Toaster = ({ toasts }) => {
  const { removeToast } = useToast()

  const handleDeleteToast = (id) => {
    console.log('id ', id)
    return
    removeToast(id)
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="px-4 py-1 shadow-lg transform transition-all duration-300 ease-in bg-white "
        >
          show data
        </div>
        // <div
        //   key={toast.id}
        //   className={`px-4 py-1 rounded shadow-lg transform transition-all duration-300 ease-in-out
        //     ${toast.type === 'success' ? 'bg-emerald-200 text-green-800' : ''}
        //     ${toast.type === 'error' ? 'bg-red-200 text-red-800' : ''}
        //     ${toast.type === 'warning' ? 'bg-amber-200 text-amber-400' : ''}
        //     ${toast.type === 'info' ? 'bg-blue-200 text-blue-800' : ''}
        //   `}
        // >
        //   <div className="relative bottom-1 flex items-center justify-between">
        //     <span>{toast.message}</span>
        //     <button
        //       onClick={handleDeleteToast(toast.id)} // ← now a function reference
        //       className="hover:bg-gray-300 hover:rounded-lg p-1"
        //     >
        //       <XIcon size={16} />
        //     </button>
        //   </div>
        //   {/* {console.log(toast)} */}
        // </div>
      ))}
    </div>
  )
}

export default Toaster
