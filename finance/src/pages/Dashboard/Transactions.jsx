import React, { useRef, useState } from 'react'
import { useToast } from '../../context/ToasterContext'
import TransactionList from '../../components/transactions/TransactionList'
import TotalTransactionCard from '../../components/transactions/TotalTransactionCard'
import { transactionFilterList } from '../../utils/Global_Constant'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Transactions = () => {
  const { addToast } = useToast()
  const [filterList, setFilterList] = useState(transactionFilterList)

  const scrollRef = useRef(null)
  const scrollLeft = () =>
    scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' })
  const scrollRight = () =>
    scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' })

  return (
    <div>
      {/* Transactions */}
      <div className="flex justify-between items-center ">
        <div className="text-3xl text-[#1d4840]">
          Hello Sajal Let's Check some expense{' '}
        </div>
        <TotalTransactionCard totalAmount={10000} currency={'INR'} />
      </div>
      <div className="flex items-center w-full max-w-7xl my-4">
        <button
          onClick={scrollLeft}
          className="px-1 py-1 rounded-full bg-white hover:bg-gray-300 transition-colors duration-200"
        >
          <ChevronLeft />
        </button>
        <div
          ref={scrollRef}
          className="no-scrollbar flex overflow-x-auto flex-nowrap gap-2 py-2 whitespace-nowrap"
        >
          {filterList.map(({ id, label, icon }) => (
            <span
              key={id}
              className=" inline-flex items-center px-2 py-1 text-sm rounded-2xl border border-red-100 cursor-pointer bg-white shadow-sm"
            >
              {icon && <span className="pr-2">{icon}</span>}
              {label}
            </span>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="px-1 py-1 rounded-full bg-white hover:bg-gray-300 transition-colors duration-200"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="text-2xl">Transaction History</div>
      <TransactionList />
    </div>
  )
}

export default Transactions
