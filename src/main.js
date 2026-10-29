import express from "express"
import routes from "./routes/index.js"
import { connectToDb } from "./config/db.js"

const app = express()
const PORT = process.env.SERVER_PORT || 8080
await connectToDb()
app.use(express.json())
app.use(express.urlencoded())

app.use(routes)

app.listen(PORT, function() {
    console.log("listen to port "+ PORT)
})