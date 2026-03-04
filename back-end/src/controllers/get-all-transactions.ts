import db from '../database/database-schema';
import {Request, Response} from 'express'
import Transaction from '../types/transaction-types'

const getAllTransactions = (req: Request, res: Response) => {
    db.all("SELECT * FROM Transactions", (error, transactions: Transaction[]) => {
        if(error){
            res.status(500).json(error.message)
            return
        }
        res.status(200).json(transactions)
    })
}

export default getAllTransactions