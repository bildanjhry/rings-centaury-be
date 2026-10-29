import { pool } from "../config/db.js";

export async function GetAllBrands(params){
    const result = await pool.query(`SELECT * FROM "brands" LIMIT $1`, [params.limit])
    return result.rows
}

export async function AddNewBrand(data) {
    const result = await pool.query(`
        INSERT INTO "brands" ("name") VALUES ($1) 
        RETURNING id, created_at`, 
    [data.name])
    return result.rows[0]
}