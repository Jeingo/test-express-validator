import express from 'express'
import {productRouter} from './routers/product-router'

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.use('/products', productRouter)

app.listen(PORT, () => {
    console.log(`Server is starting on port: ${PORT}`)
})