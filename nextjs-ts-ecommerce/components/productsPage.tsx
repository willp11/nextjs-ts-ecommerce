import ProductGrid from './productGrid';
import { Product } from '../types/product';

export default function ProductsPage({title, products}: {title: string, products: Product[]}) {
    return (
        <div className="w-full max-w-[1280px] mx-auto py-4">
            <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col items-start justify-center">
                <h1 className="text-2xl tracking-tight font-bold">{title}</h1>
                <p className="text-sm">(Showing {products.length} items)</p>
            </div>
            <ProductGrid products={products} />
        </div>
    )
}