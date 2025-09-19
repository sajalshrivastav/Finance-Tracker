import React from 'react'
import { PiggyBankIcon } from 'lucide-react'

const TotalTransactionCard = ({ TotalAmont, Currency }) => {
  return (
    <div className="dark-green w-3/10 text-white p-4 rounded-lg shadow-xs h-[220px]">
      {/* TotalTransactionCard */}
      <div className=" flex flex-col text-White">
        <span className=" text-xl flex justify-between py-3 ">
          Current Balance
          <span className="flex justify-center items-center px-2 ">
            <PiggyBankIcon color="white" size={36} />
          </span>
        </span>
        <span className="text-3xl flex">INR 50000</span>
      </div>
    </div>
  )
}

export default TotalTransactionCard
