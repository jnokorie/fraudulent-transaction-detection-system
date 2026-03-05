import db from '../database/database-schema';
import { Request, Response } from 'express'
import Transaction from '../types/transaction-types'

const createTransaction = (req: Request, res: Response) => {
    db.get(`INSERT INTO Transactions(user_name, amount, time, flagged) 
          VALUES($user_name, $amount, $time, $flagged)`, 
        {
            $user_name: req.body.user_name,
            $amount: req.body.amount,
            $time: req,
            $flagged:req
        })
}



export default createTransaction