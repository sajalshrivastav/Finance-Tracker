import React, { useEffect, useState } from 'react'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'

const TransactionList = () => {
  let data = [
    {
      _id: {
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Expense',
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
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Expense',
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
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Expense',
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
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Expense',
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
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Expense',
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
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Expense',
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
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Expense',
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
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Expense',
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
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Expense',
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
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Expense',
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
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Expense',
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
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Expense',
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
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Expense',
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
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Expense',
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
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Expense',
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
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Expense',
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
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Expense',
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
        $oid: '68bd763e95518d50c27301f8',
      },
      type: 'Expense',
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
    <div className="overflow-x-auto w-3/8 p-4 shadow-lg rounded-xl light-green-tint ">
      data show
    </div>
  )
}

export default TransactionList
