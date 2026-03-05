import express from 'express';
import getAllTransactions from '../controllers/get-all-transactions';
import getTransactionsByName from '../controllers/get-transaction-by-name';

const router = express.Router()

router.get('/transactions', getAllTransactions)
router.get('/transactions/:user_name', getTransactionsByName )