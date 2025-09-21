import React, { useEffect, useState } from 'react'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react'

const TransactionList = () => {
  let data = [
    {
      _id: {
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Spending',
      category: 'Food',
      subCategory: 'Restaurant',
      amount: 1500,
      currency: 'INR',
      paymentMethod: 'upi',
      notes: 'Dinner with friends',
      tags: ['weekend', 'fun'],
      isRecurring: false,
      transactionDate: {
        $date: '2023-09-01T00:00:00.000Z',
      },
      userId: '68bc6c9093d1045aa8056738',
    },
    {
      _id: {
        $oid: '68bd763e95518d50c27301f9',
      },
      type: 'Received',
      category: 'Food',
      subCategory: 'Restaurant',
      amount: 15,
      currency: 'INR',
      paymentMethod: 'upi',
      notes: 'Dinner with friends',
      tags: ['weekend', 'fun'],
      isRecurring: false,
      transactionDate: {
        $date: '2023-09-01T00:00:00.000Z',
      },
      userId: '68bc6c9093d1045aa8056738',
    },
    {
      _id: {
        $oid: '68bd763e95518d90c27301f8',
      },
      type: 'Received',
      category: 'Food',
      subCategory: 'Restaurant',
      amount: 150,
      currency: 'INR',
      paymentMethod: 'upi',
      notes: 'Dinner with friends',
      tags: ['weekend', 'fun'],
      isRecurring: false,
      transactionDate: {
        $date: '2023-09-01T00:00:00.000Z',
      },
      userId: '68bc6c9093d1045aa8056738',
    },
    {
      _id: {
        $oid: '68bd763e35518d50c27301f8',
      },
      type: 'Spending',
      category: 'Food',
      subCategory: 'Restaurant',
      amount: 150,
      currency: 'INR',
      paymentMethod: 'upi',
      notes: 'Dinner with friends',
      tags: ['weekend', 'fun'],
      isRecurring: false,
      transactionDate: {
        $date: '2023-09-01T00:00:00.000Z',
      },
      userId: '68bc6c9093d1045aa8056738',
    },
    {
      _id: {
        $oid: '68bd763e95518d50c22301f8',
      },
      type: 'Received',
      category: 'Food',
      subCategory: 'Restaurant',
      amount: 100,
      currency: 'INR',
      paymentMethod: 'upi',
      notes: 'Dinner with friends',
      tags: ['weekend', 'fun'],
      isRecurring: false,
      transactionDate: {
        $date: '2023-09-01T00:00:00.000Z',
      },
      userId: '68bc6c9093d1045aa8056738',
    },
    {
      _id: {
        $oid: '68cd763e95518d50c27301f8',
      },
      type: 'Spending',
      category: 'Food',
      subCategory: 'Restaurant',
      amount: 500,
      currency: 'INR',
      paymentMethod: 'upi',
      notes: 'Dinner with friends',
      tags: ['weekend', 'fun'],
      isRecurring: false,
      transactionDate: {
        $date: '2023-09-01T00:00:00.000Z',
      },
      userId: '68bc6c9093d1045aa8056738',
    },
    {
      _id: {
        $oid: '68bd763e95519d50c27301f8',
      },
      type: 'Spending',
      category: 'Food',
      subCategory: 'Restaurant',
      amount: 1500,
      currency: 'INR',
      paymentMethod: 'upi',
      notes: 'Dinner with friends',
      tags: ['weekend', 'fun'],
      isRecurring: false,
      transactionDate: {
        $date: '2023-09-01T00:00:00.000Z',
      },
      userId: '68bc6c9093d1045aa8056738',
    },
    {
      _id: {
        $oid: '68bd763e99518d50c27301f8',
      },
      type: 'Received',
      category: 'Food',
      subCategory: 'Restaurant',
      amount: 500,
      currency: 'INR',
      paymentMethod: 'upi',
      notes: 'Dinner with friends',
      tags: ['weekend', 'fun'],
      isRecurring: false,
      transactionDate: {
        $date: '2023-09-01T00:00:00.000Z',
      },
      userId: '68bc6c9093d1045aa8056738',
    },
    {
      _id: {
        $oid: '68bd763e85518d50c27301f8',
      },
      type: 'Spending',
      category: 'Food',
      subCategory: 'Restaurant',
      amount: 1500,
      currency: 'INR',
      paymentMethod: 'upi',
      notes: 'Dinner with friends',
      tags: ['weekend', 'fun'],
      isRecurring: false,
      transactionDate: {
        $date: '2023-09-01T00:00:00.000Z',
      },
      userId: '68bc6c9093d1045aa8056738',
    },
    {
      _id: {
        $oid: '68bd763e95538d50c27301f8',
      },
      type: 'Spending',
      category: 'Food',
      subCategory: 'Restaurant',
      amount: 4500,
      currency: 'INR',
      paymentMethod: 'upi',
      notes: 'Dinner with friends',
      tags: ['weekend', 'fun'],
      isRecurring: false,
      transactionDate: {
        $date: '2023-09-01T00:00:00.000Z',
      },
      userId: '68bc6c9093d1045aa8056738',
    },

    {
      _id: {
        $oid: '68bd763e95518d30c27301f8',
      },
      type: 'Received',
      category: 'Food',
      subCategory: 'Restaurant',
      amount: 500,
      currency: 'INR',
      paymentMethod: 'upi',
      notes: 'Dinner with friends',
      tags: ['weekend', 'fun'],
      isRecurring: false,
      transactionDate: {
        $date: '2023-09-01T00:00:00.000Z',
      },
      userId: '68bc6c9093d1045aa8056738',
    },
    {
      _id: {
        $oid: '68bd763e95568d50c27301f8',
      },
      type: 'Received',
      category: 'Food',
      subCategory: 'Restaurant',
      amount: 200,
      currency: 'INR',
      paymentMethod: 'upi',
      notes: 'Dinner with friends',
      tags: ['weekend', 'fun'],
      isRecurring: false,
      transactionDate: {
        $date: '2023-09-01T00:00:00.000Z',
      },
      userId: '68bc6c9093d1045aa8056738',
    },
    {
      _id: {
        $oid: '68bd763e95518k50c27301f8',
      },
      type: 'Received',
      category: 'Food',
      subCategory: 'Restaurant',
      amount: 2500,
      currency: 'INR',
      paymentMethod: 'upi',
      notes: 'Dinner with friends',
      tags: ['weekend', 'fun'],
      isRecurring: false,
      transactionDate: {
        $date: '2023-09-01T00:00:00.000Z',
      },
      userId: '68bc6c9093d1045aa8056738',
    },
    {
      _id: {
        $oid: '68bd763e95518d50m27301f8',
      },
      type: 'Received',
      category: 'Food',
      subCategory: 'Restaurant',
      amount: 6530,
      currency: 'INR',
      paymentMethod: 'upi',
      notes: 'Dinner with friends',
      tags: ['weekend', 'fun'],
      isRecurring: false,
      transactionDate: {
        $date: '2023-09-01T00:00:00.000Z',
      },
      userId: '68bc6c9093d1045aa8056738',
    },
    {
      _id: {
        $oid: '68bd763e95518d50c27306f8',
      },
      type: 'Received',
      category: 'Food',
      subCategory: 'Restaurant',
      amount: 4500,
      currency: 'INR',
      paymentMethod: 'upi',
      notes: 'Dinner with friends',
      tags: ['weekend', 'fun'],
      isRecurring: false,
      transactionDate: {
        $date: '2023-09-01T00:00:00.000Z',
      },
      userId: '68bc6c9093d1045aa8056738',
    },
    {
      _id: {
        $oid: '68bd763e95518d50c23301f8',
      },
      type: 'Spending',
      category: 'Food',
      subCategory: 'Restaurant',
      amount: 456,
      currency: 'INR',
      paymentMethod: 'upi',
      notes: 'Dinner with friends',
      tags: ['weekend', 'fun'],
      isRecurring: false,
      transactionDate: {
        $date: '2023-09-01T00:00:00.000Z',
      },
      userId: '68bc6c9093d1045aa8056738',
    },
    {
      _id: {
        $oid: '68bd763e95518d50c27301f2',
      },
      type: 'Spending',
      category: 'Food',
      subCategory: 'Restaurant',
      amount: 326,
      currency: 'INR',
      paymentMethod: 'upi',
      notes: 'Dinner with friends',
      tags: ['weekend', 'fun'],
      isRecurring: false,
      transactionDate: {
        $date: '2023-09-01T00:00:00.000Z',
      },
      userId: '68bc6c9093d1045aa8056738',
    },
    {
      _id: {
        $oid: '68bd763e95518d50c27300f8',
      },
      type: 'Received',
      category: 'Food',
      subCategory: 'Restaurant',
      amount: 30500,
      currency: 'INR',
      paymentMethod: 'upi',
      notes: 'Dinner with friends',
      tags: ['weekend', 'fun'],
      isRecurring: false,
      transactionDate: {
        $date: '2023-09-01T00:00:00.000Z',
      },
      userId: '68bc6c9093d1045aa8056738',
    },
  ]
  const [transactionList, setTransactionList] = useState(data)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const getTransactionList = async () => {
    const userId = '68bc6c9093d1045aa8056738'
    let params = {
      userId: userId,
    }
    try {
      const transactionDetails = await axiosInstance.get(
        API_PATHS.Transaction.GET_ALL_USER_TRANSACTION,
        { params },
      )

      const data = await transactionDetails.data
      setTransactionList(data.transactions)
    } catch (error) {
      console.log('error is comming', error)
      // setError('Failed to load transactions.')
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getTransactionList()
  }, [])
  useEffect(() => {
    console.log('✅ transactionList updated →', transactionList)
  }, [transactionList])
  if (loading) {
    return <p className="text-gray-600">Loading transactions…</p>
  }

  if (error) {
    return <p className="text-red-600">{error}</p>
  }

  if (transactionList.length === 0) {
    return <p className="text-gray-500">No transactions found.</p>
  }
  return (
    <div className="overflow-x-auto w-3/8 p-4   ">
      data show
      <div className=" px-3 m-1 h-auto rounded-xl">
        {transactionList.map((listData, index) => (
          <div className="p-4 flex shadow-2xl rounded-xl " key={listData._id}>
            {listData.category} {listData.transactionDate.$date}
            {listData.paymentMethod}
            <div>
              {listData.type === 'Received' ? (
                <ArrowDownLeft color="red" />
              ) : (
                <ArrowUpRight color="green" />
              )}
              {listData.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransactionList
