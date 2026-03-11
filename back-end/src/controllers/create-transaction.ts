import db from '../database/database-schema';
import { Request, Response } from 'express'
import { Transaction } from '../types/transaction-types'
import transactionLimit from '../services/business-logic/high-value-anomoly'
import transactionSpeed from '../services/business-logic/time-period'

const createTransaction = (req: Request, res: Response) => {
    const date: Date = new Date()

    try {
        const recentUser: Transaction[] = db.prepare("SELECT * FROM Transactions ORDER BY id DESC LIMIT 1").get() as Transaction[]
        const isFlagged: boolean = (transactionSpeed(req.body, recentUser, date) || transactionLimit(req.body.amount))
        db.prepare("INSERT INTO Transactions(user_name, amount, time, flagged) VALUES(@user_name, @amount, @time, @flagged)")
            .get({
                user_name: req.body.user_name,
                amount: req.body.amount,
                time: date.toString(),
                flagged: isFlagged
            })
        res.status(200).json({message: "Successful Input!"})
    }

    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        }
    }
}
export default createTransaction

