import { Router } from "express";
import * as prodControllers from "../controllers/product.ctrl.js"

const prodRoutes = Router()
/**
 * @swagger
 * /product:
 *   get:
 *    description: Get all available products
 *    tags:
 *     - Products
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
 *        description: Success get all products
 *      "500": 
 *        description: Internal server error
 */
prodRoutes.get("", prodControllers.GetAllProducts)

/**
 * @swagger
 * /product:
 *   post:
 *    description: Add new product
 *    tags:
 *     - Products
 *    requestBody:
 *      description: Insert product's details
 *      content:
 *         application/x-www-form-urlencoded:
 *            schema:
 *              type: object
 *              properties:
 *                 name:
 *                   type: string
 *                 init_price:
 *                   type: integer
 *                 sku:
 *                   type: string
 *                 desc:
 *                   type: string
 *    responses:
 *      "200": 
 *        description: Success add new products
 *      "404": 
 *        description: Bad request
 */
prodRoutes.post("", prodControllers.AddNewProduct)

export default prodRoutes