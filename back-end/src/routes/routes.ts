import express from 'express';
import getAllTransactions from '../controllers/get-all-transactions';
import getTransactionsByName from '../controllers/get-transaction-by-name';
import createTransaction from '../controllers/create-transaction';

const router = express.Router()

router.get('/', getAllTransactions)
router.get('/:user_name', getTransactionsByName )
router.put('/', createTransaction)


export default router