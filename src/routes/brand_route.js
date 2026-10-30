import { Router } from "express"
import * as brandControllers from "../controllers/brand.ctrl.js"

const brandRoutes = Router()

/**
 * @swagger
 * /api/brand:
 *   get:
 *    description: Get all available brands
 *    tags:
 *     - Brands
 *    parameters:
 *     - in: query 
 *       name: limit
 *       required: false
 *       schema:
 *         type: string
 *         default: 20
 *       description: Limit data
 *    responses:
 *      "200": 
 *        description: Success get all brands
 *      "400": 
 *        description: Bad request
 */
brandRoutes.get("", brandControllers.GetAllBrands)

/**
 * @swagger
 * /api/brand:
 *   post:
 *    description: Add new brand
 *    tags:
 *     - Brands
 *    requestBody:
 *      description: Insert brand's details
 *      content:
 *         application/x-www-form-urlencoded:
 *            schema:
 *              type: object
 *              properties:
 *                 name:
 *                   type: string
 *    responses:
 *      "200": 
 *        description: Success add new products
 *      "404": 
 *        description: Bad request
 */
brandRoutes.post("", brandControllers.AddNewBrand)

export default brandRoutes