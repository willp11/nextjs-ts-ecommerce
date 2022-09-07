import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductsPage from '../../components/productsPage';
import Head from 'next/head';
import { Product } from '../../types/product';
import { searchProducts } from '../../utils/products';

export default function Search() {

    const router = useRouter();
    const query = router.query;
    const [results, setResults] = useState<Product[]>([]);

    useEffect(()=>{
        const search = async () => {
            const product = query?.product;
            const category = query?.category;
            if (typeof product === "string" && typeof category === "string") {
                let res: Product[] = await searchProducts(product, category);
                setResults(res);
            }
        }
        search();
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