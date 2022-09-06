export interface Product {
    id: number,
    name: string,
    materials: string[],
    categories: string[],
    price: number,
    image?: string
}