import * as trxSvc from "../services/transaction.svc.js"

export async function AddTransaction(req, res) {
    try {
        const result = await trxSvc.addTransaction(req.body)
        res.status(201).json({
            success: true,
            message: "Success create transaction",
            datas: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            datas: {}
        })
    }
}

export async function GetAllTransactions(req, res) {
    try {
        const result = await trxSvc.getAllTransactions(req.query)
        res.status(200).json({
            success: true,
            message: "Success get all transactions",
            ...result
        })
    } catch (error) {
        res.status(201).json({
            success: false,
            message: error.message,
            datas: {}
        })
    }
}