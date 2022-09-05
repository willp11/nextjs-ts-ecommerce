import earrings from '../products/earrings.json';
import ProductCard from '../components/productCard';
import { useEffect } from 'react';

export default function Earrings() {

    useEffect(()=>{
        console.log(earrings);
    }, [])

    let products = earrings.earrings.map((earring)=>{
        return <ProductCard key={earring.name} product={earring} />
    })

    return (
        <div className="w-full max-w-[1200px] mx-auto flex items-center justify-center flex-wrap">
            {products}
            {products}
        </div>
    )
}