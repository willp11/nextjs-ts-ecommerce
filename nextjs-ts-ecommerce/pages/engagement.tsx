import CategoryProductsPage from '../components/categoryProductsPage';
import Head from 'next/head';
import { CategoryProduct } from '../types/product';
import { fetchProductsByCategory } from '../utils/products';

export async function getStaticProps() {
    // Rings category has id = 7
    const products = await fetchProductsByCategory(7);
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
                <title>Engagement Rings</title>
                <meta name="description" content="high-quality jewelry, Engagement rings" />
            </Head>
            <CategoryProductsPage title="Engagement Rings" products={products} />
        </>
    )
}