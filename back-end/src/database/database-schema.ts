import Database from 'better-sqlite3';
import {Transaction} from '../types/transaction-types'
const db: Database.Database = new Database('./src/database/transactions.db')

try {
    db.exec(`CREATE TABLE IF NOT EXISTS Transactions(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_name VARCHAR(20) NOT NULL,
            amount REAL NOT NULL,
            time DATETIME NOT NULL,
            flagged BOOLEAN NOT NULL
            )`)
    console.log('Table created successfully!')
    const recentUser: Transaction = db.prepare("SELECT * FROM Transactions ORDER BY id DESC LIMIT 1").get() as Transaction
        console.log(recentUser)
} 
catch (error){
    if (error instanceof Error) {
        console.error(error.message);
    }
}

export default db