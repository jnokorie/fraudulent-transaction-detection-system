import Database from 'better-sqlite3';

const db: InstanceType<typeof Database> = new Database('./back-end/src/database/transactions.db')

try {
    db.exec(`CREATE TABLE IF NOT EXISTS Transactions(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_name VARCHAR(20) NOT NULL,
            amount REAL NOT NULL,
            time DATETIME NOT NULL,
            flagged BOOLEAN NOT NULL
            )`)
    console.log('Table created successfully!')
} 
catch (error){
    if (error instanceof Error) {
        console.error(error.message);
    }
}

export default db