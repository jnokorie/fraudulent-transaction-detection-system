import db from '../database/database-schema';
import { Request, Response } from 'express'
import Transaction from '../types/transaction-types'



const getTransactionsByName = (req: Request, res: Response) => {
    try {
        const userTransactions: Transaction[] = db.prepare("SELECT * FROM Transactions WHERE user_name = @user_name").all({ user_name: req.params.user_name }) as Transaction[]
        if (userTransactions.length) {
            res.status(200).json(userTransactions[0])
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
        }
    }

}

export default getTransactionsByName