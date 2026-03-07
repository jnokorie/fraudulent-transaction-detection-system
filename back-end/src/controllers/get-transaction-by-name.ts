import db from '../database/database-schema';
import { Request, Response } from 'express'
import Transaction from '../types/transaction-types'


const getTransactionsByName = (req: Request, res: Response) => {
    db.all("SELECT * FROM Transactions WHERE user_name = $user_name", { $user_name: req.params.user_name},
        (error, transactions: Transaction[]) => {
            if (error) {
                res.status(500).json({error: error.message})
            }
            if (transactions.length) {
                res.status(200).json(transactions)
            }
            else{
                res.status(404).json({
                    error: "Transactions not found"
                })

            }
        }
    )
}

export default getTransactionsByName