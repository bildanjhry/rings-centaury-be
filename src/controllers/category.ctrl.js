import * as categorySvc from "../services/cat.svc.js"

export async function AddNewCategory(req, res) {
    try {
        const result = await categorySvc.addNewCategory(req.body)
        res.status(201).json({
            success: true,
            message: "Success create new category",
            datas: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            datas: {}
        })
    }
}

export async function GetAllCategory(req, res) {
    const result = await categorySvc.getAllCateogries(req.query)
    try {
        res.status(200).json({
            success: true,
            message: "Success get all categories",
            ...result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            ...result
        })
    }
}