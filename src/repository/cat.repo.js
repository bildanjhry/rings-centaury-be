import { pool } from "../config/db.js";

export async function addNewCategory(data) {
    const result = await pool.query(`
        INSERT INTO "categories" ("name") VALUES ($1) RETURNING id, created_at`, 
        [data])
    return result.rows[0]
}

export async function getAllCateogries(params){
    const result = await pool.query(`SELECT * FROM "categories" LIMIT $1`, [params])
    return result.rows
}