import db from '../database/database-schema';
import { Request, Response } from 'express'
import Transaction from '../types/transaction-types'

const getAllTransactions = (req: Request, res: Response) => {
    db.all("SELECT * FROM Transactions", (error, transactions: Transaction[]) => {
        if (error) {
            res.status(500).json({error: error.message})
            return
        }
        if (transactions.length) {
            res.status(200).json(transactions)
        }
        else {
            res.status(404).json({
                error: "Transactions not found"
            })
        }})
}

export default getAllTransactions