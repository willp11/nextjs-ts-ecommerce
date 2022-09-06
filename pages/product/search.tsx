import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { products } from '../../products/products';
import ProductsPage from '../../components/productsPage';
import Head from 'next/head';
import { Product } from '../../types/product';
import { searchProducts } from '../../utils/products';

export default function Search() {

    const router = useRouter();
    const query = router.query;
    const [results, setResults] = useState<Product[]>([]);

    useEffect(()=>{
        const product = query?.product;
        if (typeof product === "string") {
            let res: Product[] = searchProducts(product, products);
            setResults(res);
        }
    }, [query]);

    return (
        <>
            <Head>
                <title>Search Jewelry</title>
                <meta name="description" content="high-quality jewelry, rings, necklaces, bracelets, earrings" />
            </Head>
            <ProductsPage title="Search" products={results} />
        </>
    )
}