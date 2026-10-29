import slugify from "../libs/slugify.js"
import * as productRepo from "../repository/product.repo.js"

export async function productService(params){
    const data = await productRepo.getAllProducts(params)
    return {
        datas: data,
        meta: {
            page: params.page,
            limit: params.limit,
            total: data.length || 0
        }
    }
}

export async function addNewProduct(data) {
    data.slugs = slugify(data.name)
    return await productRepo.addNewProduct(data)
}
