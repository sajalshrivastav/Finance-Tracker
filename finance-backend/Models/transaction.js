const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Income', 'Expense', 'Transfer', 'Invsetment'],
    },
    category: {
        type: String,
        required: true // e.g , Salary, Eating Out, Shopping, Transportation
    },
    subCategory: {
        type: String //e.g  food -> restaurant
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true,
        default: 'INR'
    },
    paymentMethod: {
        type: String,
        enum: ["cash", "upi", "credit_card", "debit_card", "net_banking", "wallet", "other"],
        default: "other"
    },
    notes: {
        type: String
    },
    tags: [
        {
            type: String  //office , subscription
        }
    ],
    isRecurring: {
        type: Boolean,
        default: false
    },

    recurringInterval: {
        type: String,
        enum: ["daily", "weekly", "monthly", "yearly"]
    },

    transactionDate: {
        type: Date,
        required: true,
        default: Date.now
    }

}, { timestamps: true });

const Transaction = mongoose.model('transaction', transactionSchema);

module.exports = Transaction;