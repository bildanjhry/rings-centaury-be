import { Router } from "express";
import * as catControllers from "../controllers/category.ctrl.js"

const catRoutes = Router()

/**
 * @swagger
 * /api/category:
 *   get:
 *    description: Get all available categories
 *    tags:
 *     - Categories
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
 *        description: Success get all categories
 *      "400": 
 *        description: Bad request
 */
catRoutes.get("", catControllers.GetAllCategory)

/**
 * @swagger
 * /api/category:
 *   post:
 *    description: Add new category
 *    tags:
 *     - Categories
 *    requestBody:
 *      description: Insert category's details
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
catRoutes.post("", catControllers.AddNewCategory)

export default catRoutes