import React from 'react'
import { useToast } from '../../context/ToasterContext'
import TransactionList from '../../components/transactions/TransactionList'
import TotalTransactionCard from '../../components/transactions/TotalTransactionCard'

const Transactions = () => {
  const { addToast } = useToast()

  return (
    <div>
      {/* Transactions */}
      <TotalTransactionCard totalAmount={10000} currency={'INR'} />
      <TransactionList />
    </div>
  )
}

export default Transactions
