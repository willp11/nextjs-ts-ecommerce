import products from '../products/products.json';
import ProductsPage from '../components/productsPage';
import Head from 'next/head';
import { useEffect } from 'react';

export default function Jewelry() {

    useEffect(()=>{
        console.log(products);
    }, [])

    return (
        <>
            <Head>
                <title>Jewelry</title>
                <meta name="description" content="high-quality jewelry, rings, necklaces, bracelets, earrings" />
            </Head>
            <ProductsPage title="Jewelry" products={products.products} />
        </>
    )
}