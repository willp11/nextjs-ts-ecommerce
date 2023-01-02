import CategoryProductsPage from '../components/categoryProductsPage';
import Head from 'next/head';
import { CategoryProduct } from '../types/product';
import { fetchProductsByCategory } from '../utils/products';

export async function getStaticProps() {
    // Rings category has id = 6
    const products = await fetchProductsByCategory(6);
    return {
        props: {
            products
        }
    }
}

export default function Rings({products}: {products: CategoryProduct[]}) {

    return (
        <>
            <Head>
                <title>Rings</title>
                <meta name="description" content="high-quality jewelry, rings" />
            </Head>
            <CategoryProductsPage title="Rings" products={products} />
        </>
    )
}