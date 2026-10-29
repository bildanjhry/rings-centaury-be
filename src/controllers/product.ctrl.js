import * as productSvc from "../services/prod.svc.js"

export async function GetAllProducts(req, res) {
    const params = req.query
    const result = await productSvc.productService(params)
    try {
        res.status(200).json({
            success: true,
            message: "Success get all products",
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

export async function AddNewProduct(req, res) {
    try {
        const result = await productSvc.addNewProduct(req.body)
        res.status(201).json({
            success: true,
            message: "Success add new product",
            datas: result 
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
            datas: {}
        })
    }
}