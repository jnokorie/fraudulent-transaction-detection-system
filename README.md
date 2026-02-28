# Fraudulent-transaction-detection-system (In Progress)

A full-stack application that analyzes financial transactions and flags potentially fraudulent activity.

The system allows transactions to be submitted, evaluated using fraud detection rules, and displayed through a web dashboard. It is designed to demonstrate backend architecture, API design, and full-stack integration.

---
## Goals

This project is built to practice:

* backend architecture
* API development
* fraud detection logic
* full-stack integration
* TypeScript development

## Features

* Submit and store transaction data
* Detect suspicious transactions using rule-based fraud checks
* Flag transactions by risk level
* View transactions and alerts through a dashboard
* REST API for transaction processing

---

## Tech Stack

**Frontend**

* React
* TypeScript

**Backend**

* Node.js
* Express
* TypeScript

**Database**

* SQLite

**Tools**

* Git & GitHub
* npm
* REST API testing tools (Postman / Thunder Client)

---

## API Example

### Create Transaction

POST /transactions

Example request:

```
{
  "user_name": "Jack White",
  "amount": 950,
  "timestamp": "2026-02-28T10:15:00"
  "flag: false
}
```

---

### Get Transactions

GET /transactions

Returns all stored transactions and their fraud status.

---

## Fraud Detection (Initial Logic)

The backend evaluates transactions using simple rules such as:

* unusually large transaction amounts
* rapid repeated transactions
* frequency of transactions

Flagged transactions are marked as **Suspicious** or **High Risk**.

---
