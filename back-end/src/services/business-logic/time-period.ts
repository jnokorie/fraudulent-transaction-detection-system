import { Transaction, CurrUser } from '../../types/transaction-types'


const transactionSpeed = (currUser: CurrUser, pastUser: Transaction[], timeStamp: Date): boolean => {
    const currUserTime: Date = timeStamp
    const pastUserTime: string | undefined = pastUser[3]?.time
    const currUserName: string | undefined = currUser.user_name
    const pastUserName: string | undefined = pastUser[1]?.user_name

    if (typeof pastUserTime === 'undefined') {
        return false
    }
    const pastUserTime_converted: Date = new Date(pastUserTime)


    const millisecsToMins: number = 1000 * 60
    const timeDifferenceinmins: number = (currUserTime.getTime() - pastUserTime_converted.getTime()) / millisecsToMins

    if ((currUserName == pastUserName) && (timeDifferenceinmins < 5)) {
        return true
    }
    return false
}


export default transactionSpeed
