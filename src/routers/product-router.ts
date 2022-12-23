import {Request, Response, Router} from 'express'
import {productService} from "../domain/product-service"
import {body} from "express-validator"
import {inputValidationMiddleware} from "../middlewares/input-validation-middleware";

export const productRouter = Router({})

const titleValidation = body('title', 'Less than 3 or more than 10').trim().isLength({min: 3, max: 10})

productRouter.get('/', (req:Request, res: Response) => {
    res.json(productService.getAllProduct())
})

productRouter.post('/',
    titleValidation,
    inputValidationMiddleware,
    (req:Request, res: Response) => {
    res.json(productService.createProduct(req.body.title, req.body.weight))
})

