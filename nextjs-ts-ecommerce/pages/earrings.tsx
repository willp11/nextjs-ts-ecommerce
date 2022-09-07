import CategoryProductsPage from '../components/categoryProductsPage';
import Head from 'next/head';
import { CategoryProduct } from '../types/product';
import { fetchProductsByCategory } from '../utils/products';

export async function getStaticProps() {
    // Earrings category has id = 3
    const products = await fetchProductsByCategory(3);
    return {
        props: {
            products
        }
    }
}

export default function Earrings({products}: {products: CategoryProduct[]}) {

    return (
        <>
            <Head>
                <title>Earrings</title>
                <meta name="description" content="high-quality jewelry, earrings" />
            </Head>
            <CategoryProductsPage title="Earrings" products={products} />
        </>
    )
}