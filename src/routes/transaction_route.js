import { Router } from "express";
import * as trxControllers from "../controllers/transaction.ctrl.js"

const trxRoutes = Router()

/**
 * @swagger
 * /api/transaction:
 *   get:
 *    description: Get all available transactions
 *    tags:
 *     - Transactions
 *    parameters:
 *     - in: query
 *       name: page
 *       required: false
 *       schema:
 *         type: string
 *         default: 1
 *       description: Page's count
 *     - in: query 
 *       name: limit
 *       required: false
 *       schema:
 *         type: string
 *         default: 20
 *       description: Limit data
 *    responses:
 *      "200": 
 *        description: Success get all transactions
 *      "500": 
 *        description: Internal server error
 */
trxRoutes.get("", trxControllers.GetAllTransactions)

/**
 * @swagger
 * /api/transaction:
 *   post:
 *    description: Add new transaction
 *    tags:
 *     - Transactions
 *    requestBody:
 *      description: Insert transaction's details
 *      content:
 *         application/x-www-form-urlencoded:
 *            schema:
 *              type: object
 *              properties:
 *                 user_id:
 *                   type: string
 *                 grand_total:
 *                   type: integer
 *    responses:
 *      "200": 
 *        description: Success add transactions
 *      "404": 
 *        description: Bad request
 */
trxRoutes.post("", trxControllers.AddTransaction)

export default trxRoutes