const { validateToken } = require('../Middleware/auth.middleware');
const { getTransactionsByUser, createdTransaction, deleteTransaction } = require('../controllers/transactions.controller');

const router = require('express').Router();

// router.get('/getTransactionsByUser', validateToken, getTransactionsByUser)
router.get('/getTransactionsByUser', getTransactionsByUser)
router.post('/createTransactionByUser', createdTransaction)
router.post('/deleteTransactionByUser', deleteTransaction)



module.exports = router;