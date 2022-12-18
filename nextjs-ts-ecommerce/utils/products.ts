import { Product, CategoryProduct } from "../types/product";
import axios from 'axios';

// Fetch all products from API
export const fetchProducts = async () : Promise<Product[]> => {
    const headers = {'Content-Type': 'application/json'};
    const url = `${process.env.NEXT_PUBLIC_API_PREFIX}/product-list-get/`;
    const res = await axios.get(url, {headers: headers});
    const products = res.data;
    return products;
}

// Fetch products by category from API
export const fetchProductsByCategory = async (categoryId: number) : Promise<CategoryProduct[]> => {
    const headers = {'Content-Type': 'application/json'};
    const url = `${process.env.NEXT_PUBLIC_API_PREFIX}/products-by-category-get/${categoryId}/`;
    const res = await axios.get(url, {headers: headers});
    const products = res.data;
    return products;
}

// Get all product IDs - for getStaticPaths in product/<id> page
export const getProductIds = (products: Product[]) => {
    return products.map(product=>{
        return {
            params: {
                id: product.id.toString()
            }
        }
    })
}

// Get product data - for getStaticProps in product/<id> page
export const getProductData = (id: string, products: Product[]) => {
    const product = products.find(product => product.id === parseInt(id)) ?? null;
    return product;
}

// Find products given a product name, category and product list
export const searchProducts = async (name: string, category: string) : Promise<Product[]> => {
    // return empty array if don't provide search term
    if (name === "") return [];

    // get products from API
    const products = await fetchProducts();

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
                // if word matches the search term and not already been found
                if (word === w && !(product.id in foundIds)) {
                    foundIds[product.id] = 1
                    // ensure it is within the correct category
                    if (category === "All") {
                        return true;
                    } else {
                        let found = false;
                        product.categories.forEach((cat)=>{
                            if (cat.category.name === category) found = true;
                        })
                        return found;
                    }
                }
            }
            return false;
        })

        productList.push(...productsFound)
    })
    return productList;
}