import fs from "fs";

export class ProductManager {
    constructor(path){
        this.products = []
        this.path = path
    }
    
    async getProducts(limit) {
        try {
            const response = await fs.promises.readFile(this.path, "utf8")
            const products = JSON.parse(response)
            if (limit) {
                const slicedProducts =  products.slice(0, limit)
               return slicedProducts
            }
            return products
        } catch (error) {
            throw error
        }
    }
    
    async getProductsById(id) { 
        try {
            const response = await fs.promises.readFile(this.path, "utf8")
            const products = JSON.parse(response)
            const findedProduct = products.find( p => p.id === id)
            if (!findedProduct) {
                return `No se encontro el producto con id ${id}`
            }

            return findedProduct
        } catch (error) {
            throw error
        }
    }
}

