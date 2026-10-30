import { pool } from "../config/db.js";

export async function addTransaction(data){
    const client = await pool.connect()
    try{
        await client.query("BEGIN")
        const result = await client.query(`
        INSERT INTO "transactions" ("grand_total") VALUES
        ($1) RETURNING id, created_at`, [data.grand_total])
        
        await client.query("COMMIT")
        return result.rows[0]

    } catch(error){
        console.log(error.message)
        client.query("ROLLBACK")
        throw new Error(error.message)
    } finally {
        client.release()
    }
}


export async function getAllTransactions(params) {
    const result = await pool.query(`SELECT * FROM "transactions" LIMIT $1`, 
        [params])
    return result.rows
}