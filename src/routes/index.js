import { Router } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"
import prodRoutes from "./product_route.js";
import brandRoutes from "./brand_route.js"

const swaggerOpt = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Rings Centaury",
            version: "1.0.0",
            description: "Rings Centaury's API Documentation"
        },
        components: {
            securitySchemes: {
                token: {
                    type: "apiKey",
                    name: "Authentication",
                    in: "header",

                }
            }
        },
    },
    apis: ["./src/routes/*route.js"]
}

const swagger = swaggerJSDoc(swaggerOpt)

const routes = Router()
routes.use("/product", prodRoutes)
routes.use("/brand", brandRoutes)
routes.use("/rc-api", swaggerUi.serve, swaggerUi.setup(swagger))

export default routes