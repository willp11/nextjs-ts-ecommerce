import { Product } from "../types/product"

export const getProductIds = (products: Product[]) => {
    return products.map(product=>{
        return {
            params: {
                id: product.id.toString()
            }
        }
    })
}

export const getProductData = (id: string, products: Product[]) => {
    const product = products.find(product => product.id === parseInt(id)) ?? null;
    return product;
}