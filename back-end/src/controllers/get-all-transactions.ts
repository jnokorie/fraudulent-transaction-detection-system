import db from '../database/database-schema';
import { Request, Response } from 'express'
import Transaction from '../types/transaction-types'

const getAllTransactions = (req: Request, res: Response) => {
    try {
        const allTransactions: Transaction[] = db.prepare("SELECT * FROM Transactions").all() as Transaction[]
        if (allTransactions.length) {
            res.status(200).json(allTransactions[0])
        }
        else {
            res.status(404).json({
                error: "Transactions not found"
            })
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
            return
        }
    }
}

export default getAllTransactions






