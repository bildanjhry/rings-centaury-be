import * as brandSvc from "../services/brand.svc.js"

export async function GetAllBrands(req, res) {
    const result = await brandSvc.getAllBrands(req.query)
    try {
        res.status(200).json({
            success:true,
            message:"Success get all brands",
            ...result
        })
    } catch (error) {
        res.status(500).jsonn({
            success:false,
            message:error.message,
            ...result
        })
    }
}

export async function AddNewBrand(req, res) {
    try {
        const result = await brandSvc.addNewBrand(req.body)
        res.status(201).json({
            success:true,
            message:"Success add new brand",
            datas:result
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message,
            datas:{}
        })
    }
}