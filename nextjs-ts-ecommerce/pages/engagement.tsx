import CategoryProductsPage from '../components/categoryProductsPage';
import Head from 'next/head';
import { CategoryProduct } from '../types/product';
import { fetchProductsByCategory } from '../utils/products';

export async function getStaticProps() {
    // Rings category has id = 4
    const products = await fetchProductsByCategory(4);
    return {
        props: {
            products
        }
    }
}

export default function Engagement({products}: {products: CategoryProduct[]}) {

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