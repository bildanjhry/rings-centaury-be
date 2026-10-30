import * as trxRepo from "../repository/transaction.repo.js"

export async function addTransaction(data){
    return await trxRepo.addTransaction(data)
}

export async function getAllTransactions(params) {
    const result = await trxRepo.getAllTransactions(params.limit)
    return {
        datas: result,
        meta: {
            limit: params.limit,
            total: result.length || 0
        }
    }
}