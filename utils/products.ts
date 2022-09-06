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

export const searchProducts = (name: string, products: Product[]) => {
    // get all words in search term
    name = name.toLowerCase();
    const searchWords = name.split(" ");

    let productList: Product[] = []; // results list
    let foundIds: {[key: number] : number} = {}; // avoid duplicates

    // iterate over all the search terms 
    searchWords.forEach((w)=>{
        const productsFound = products.filter((product)=>{
            const lowerCase = product.name.toLowerCase();
            const words = lowerCase.split(" ");
            // iterate over all words in the product name
            for (let i=0; i<words.length; i++) {
                const word = words[i].slice(0, w.length);
                if (word === w && !(product.id in foundIds)) {
                    foundIds[product.id] = 1
                    return true;
                }
            }
            return false
        })

        productList.push(...productsFound)
    })
    return productList;
}