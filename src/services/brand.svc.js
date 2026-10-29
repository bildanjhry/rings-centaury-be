import * as brandRepo from "../repository/brand.repo.js"

export async function getAllBrands(params) {
    const result = await brandRepo.GetAllBrands(params)
    return {
        datas: result,
        meta: {
            limit: params.limit,
            total: result.length || 0
        }
    }
}

export async function addNewBrand(datas) {
    return await brandRepo.AddNewBrand(datas)
}