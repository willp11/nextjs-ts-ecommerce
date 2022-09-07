import ProductsPage from '../components/productsPage';
import Head from 'next/head';
import { Product } from '../types/product';
import { fetchProducts } from '../utils/products';

export async function getStaticProps() {
    try {
        const products = await fetchProducts();
        return {
            props: {
                products
            }
        }
    } catch(e) {
        console.log(e);
        return [];
    }
}

export default function Jewelry({products}: {products: Product[]}) {
    return (
        <>
            <Head>
                <title>Jewelry</title>
                <meta name="description" content="high-quality jewelry, rings, necklaces, bracelets, earrings" />
            </Head>
            <ProductsPage title="Jewelry" products={products}/>
        </>
    )
}