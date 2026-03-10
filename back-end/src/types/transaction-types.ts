export interface Transaction {
    id: number
    user_name: string
    amount: number
    time: string
    flagged: boolean
}

export interface CurrUser {
    user_name: string
    transaction: number
}


