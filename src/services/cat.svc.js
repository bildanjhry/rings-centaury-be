import * as categoryRepo from "../repository/cat.repo.js"

export async function addNewCategory(data) {
    return await categoryRepo.addNewCategory(data.name)
}

export async function getAllCateogries(params){
    const res = await categoryRepo.getAllCateogries(params.limit)
    return {
        datas:res,
        meta: {
            limit: params.limit,
            total: res.length || 0
        }
    }
}