import {Request, Response, Router} from 'express'
import {productRepository} from "../repositories/product-repository"
import {body, validationResult} from "express-validator";
import {inputValidationMiddleware} from "../middlewares/input-validation-middleware";

export const productRouter = Router({})

const titleValidation = body('title').trim().isLength({min: 3, max: 10}).withMessage('Title length should be from 3 to 10 symbols')

productRouter.get('/', (req:Request, res: Response) => {
    res.json(productRepository.getAllProduct())
})

productRouter.post('/',
    titleValidation,
    inputValidationMiddleware,
    (req:Request, res: Response) => {
    res.json(productRepository.createProduct(req.body.title, req.body.weight))
})

