
const transactionLimit = (amount: number): boolean => {
    if (amount > 500){
        return true
    }
    return false
}

export default transactionLimit