const Transaction = require("../Models/transaction");


const getTransactionsByUser = async (req, res) => {

    try {
        const { userId } = req.query;

        const transactionDetail = await Transaction.find({ userId: userId });
        if (!transactionDetail) {
            return res.status(404).json({ message: "No transactions found for this user" });
        }

        res.status(200).json({ message: "Transactions fetched successfully", transactions: transactionDetail });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
        console.error(error);
    }

}
const createdTransaction = async (req, res) => {
    try {
        const { type, amount, category, subCategory, paymentMethod, notes, tags, isRecurring, recurringInterval, transactionDate } = req.body;
        if (!type || !amount || !category) {
            return res.status(400).json({ message: "Type, Amount and Category are required" });
        }
        let transactionType;
        if (type.toLowerCase() === "income") {
            transactionType = "Income";  // 💰 Money In
        } else if (type.toLowerCase() === "expense") {
            transactionType = "Expense"; // 💸 Money Out
        } else if (type.toLowerCase() === "transfer") {
            transactionType = "Transfer";
        } else if (type.toLowerCase() === "investment") {
            transactionType = "Investment";
        } else {
            return res.status(400).json({ message: "Invalid transaction type" });
        }
        const transaction = new Transaction({
            userId: req.user.id, // 👈 assumes JWT middleware sets req.user
            type: transactionType,
            category,
            subCategory: subCategory || null,
            amount,
            paymentMethod: paymentMethod || "other",
            notes: notes || "",
            tags: tags || [],
            isRecurring: isRecurring || false,
            recurringInterval: recurringInterval || null,
            transactionDate: transactionDate || new Date(),
        });

        await transaction.save();
        res.status(201).json({ message: "Transaction Created Successfullt" })

    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.error(error);
    }
}
const deleteTransaction = async (req, res) => {
    try {
        const { id, userId } = req.body;
        const transaction = await transaction.findOneAndDelete({ _id: id, userId: userId });
        if (!transaction) {
            return res.status(404).json({ message: "Transaction not found or not authorized" });
        }
        res.status(200).json({ message: "Transaction deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.error(error);

    }
}

// const updateTransaction = async (req, res) => { 
//     try {
//         const { id, userId, updateTransactionData } = req.body;
//         const transaction = await Transaction.findOneAndUpdate({ _id: id, userId: userId }, updateTransactionData, { new: true });
//     } catch (error) { 

//     }
// }




module.exports = { getTransactionsByUser, createdTransaction, deleteTransaction };