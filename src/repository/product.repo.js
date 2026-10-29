import { pool } from "../config/db.js"

export async function getAllProducts(params) {
    const finalPageCount = (params.page * params.limit) - params.limit
    const result = await pool.query(`
        SELECT * FROM "products" LIMIT $1 OFFSET $2`, 
        [params.limit, finalPageCount]
    )
        
    return result.rows
}

export async function addNewProduct(data) {
    const result = await pool.query(`
        INSERT INTO "products" ("name", "init_price", "sku", "slugs", "desc")
        VALUES ($1, $2, $3, $4, $5) RETURNING id`,
    [data.name, data.init_price, data.sku, data.slugs, data.desc])

    return result.rows[0]
}