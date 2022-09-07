import { Product } from "../types/product";
import ProductCard from "./productCard";

export default function ProductGrid({products}: {products: Product[]}) {

    let productsDiv = products.map((product, idx)=>{
        if (product.image === undefined) console.log(idx);
        return <ProductCard key={product.name} product={product} />
    })

    return (
        <div className="w-full max-w-[1280px] mx-auto py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
            {productsDiv}
        </div>
    )
}