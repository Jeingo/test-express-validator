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
    createProduct(newProduct:{id:number, title:string, weight:string}) {
        db.product.push(newProduct)
        return newProduct
    }
}