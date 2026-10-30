import redis from "../libs/redis.js"
import * as productSvc from "../services/prod.svc.js"

export async function GetAllProducts(req, res) {
    try {
        const endpoint = `products:${req.originalUrl}`;
        const redisData = await redis.get(endpoint)
        const params = req.query
        let result
        if (!redisData) {
            result = await productSvc.productService(params)
            await redis.set(endpoint, JSON.stringify(result), { EX: 60 })
        } else {
            result = JSON.parse(redisData)
        }
        res.status(200).json({
            success: true,
            message: "Success get all products",
            ...result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            datas: {}
        })
    }
}

export async function AddNewProduct(req, res) {
    try {
        const result = await productSvc.addNewProduct(req.body)
        
        for await (const key of redis.scanIterator({
            MATCH: "products:*",
            COUNT: 100
        })) {
            await redis.del(key);
        }

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