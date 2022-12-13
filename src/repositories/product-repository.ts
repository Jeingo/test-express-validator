const db = {
    product: [{
        id: 1,
        title: 'Title',
        weight: '100'
    }]
}

export const productRepository = {
    getAllProduct () {
        return db.product
    },
    createProduct(title: string, weight: string) {
        const product = {
            id: +(new Date()),
            title: title,
            weight: weight
        }
        db.product.push(product)
        return product
    }
}