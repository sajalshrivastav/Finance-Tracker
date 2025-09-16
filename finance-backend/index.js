require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { connectDB } = require('./config/db'); // Ensure DB connection is established
const authRouter = require('./routes/auth.route');
const transactionRoute = require('./routes/transaction.route');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
    res.send('Finance Backend is running');
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// origin: process.env.CLIENT_URL || "*",
app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["content-type", "Authorization"],
    credentials: true
}))
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/transaction', transactionRoute)
// app.use('/user-data/v1', userData)


app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

connectDB();
app.listen(PORT, () => {
    console.log(`Finance Backend is listening at http://localhost:${PORT}`);
});