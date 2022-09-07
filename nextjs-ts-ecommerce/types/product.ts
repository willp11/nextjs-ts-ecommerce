export interface Product {
    id: number,
    name: string,
    materials: string[],
    categories: {category: {id: number, name: string}}[],
    price: number,
    image?: string
}

export interface CategoryProduct {
    product: Product
}