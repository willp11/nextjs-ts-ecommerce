import ProductGrid from './productGrid';
import { CategoryProduct, Product } from '../types/product';
import {useState, useEffect} from 'react';

export default function CategoryProductsPage({title, products}: {title: string, products: CategoryProduct[]}) {

    const [productList, setProductList] = useState<Product[]>([]);

    useEffect(()=>{
        let prods: Product[] = [];
        products.forEach(prod=>{
            prods.push(prod.product);
        })
        setProductList(prods);
    }, [products])

    return (
        <div className="w-full max-w-[1280px] mx-auto py-4">
            <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col items-start justify-center">
                <h1 className="text-2xl tracking-tight font-bold">{title}</h1>
                <p className="text-sm">(Showing {products.length} items)</p>
            </div>
            <ProductGrid products={productList} />
        </div>
    )
}