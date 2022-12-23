import {productRepository} from "../repositories/product-repository"

export const productService = {
    getAllProduct () {
        return productRepository.getAllProduct()
    },
    createProduct(title: string, weight: string) {
        const product = {
            id: +(new Date()),
            title: title,
            weight: weight
        }
        return  productRepository.createProduct(product)
    }
}