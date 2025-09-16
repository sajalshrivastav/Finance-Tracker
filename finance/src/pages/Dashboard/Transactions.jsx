import React from 'react'
import { useToast } from '../../context/ToasterContext'

const Transactions = () => {
  const { addToast } = useToast()
  const handleClick = () => {
    addToast('This is a success message!', 'success')
    // addToast('This is an error message!', 'error')
    // addToast('This is a warning message!', 'warning')
    // addToast('This is a info message!', 'info')
  }
  return (
    <div>
      Transactions
      <button
        onClick={handleClick}
        className="p-2 text-white rounded-lg bg-zinc-600 shadow-lg "
      >
        Toaster
      </button>
    </div>
  )
}

export default Transactions
