import React from 'react'
import { PiggyBankIcon } from 'lucide-react'

const TotalTransactionCard = ({ TotalAmont, Currency }) => {
  return (
    <div className="dark-green w-2/10 text-white p-4 rounded-lg shadow-xs h-[100px]">
      {/* TotalTransactionCard */}
      <div className=" flex flex-col text-White">
        <span className=" text-md flex justify-between py-1 ">
          Current Balance
          <span className="flex justify-center items-center px-2 ">
            <PiggyBankIcon color="white" size={32} />
          </span>
        </span>
        <span className="text-xl flex">INR 50000</span>
      </div>
    </div>
  )
}

export default TotalTransactionCard
