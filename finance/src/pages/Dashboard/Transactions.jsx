import React from 'react'
import { useToast } from '../../context/ToasterContext'
import TransactionList from '../../components/transactions/TransactionList'

const Transactions = () => {
  const { addToast } = useToast()

  return (
    <div>
      Transactions
      <TransactionList />
    </div>
  )
}

export default Transactions
