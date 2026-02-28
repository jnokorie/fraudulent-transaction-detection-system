import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./back-end/database/transactions.db', (error) => {
    if (error) {
        console.error(error.message);
        return;
    }

    console.log('Connected to SQLite database');
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS Transactions(
            id INTEGER PRIMARY KEY,
            user_name VARCHAR(20) NOT NULL,
            amount REAL NOT NULL,
            time DATETIME NOT NULL,
            flagged BOOLEAN NOT NULL
            )`, (error) => {
        if (error) {
            console.error(error.message);
        }
        console.log('Table created successfully!')
    });
});

