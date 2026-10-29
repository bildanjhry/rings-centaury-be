import pg from "pg"

const { Pool } = pg

export const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

export async function connectToDb() {
    try {
        console.log("Connect to database")
    } catch (err){
        console.log("Failed to connect database " + err)
    }
}