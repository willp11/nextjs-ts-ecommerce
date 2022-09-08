import CategoryProductsPage from '../components/categoryProductsPage';
import Head from 'next/head';
import { CategoryProduct } from '../types/product';
import { fetchProductsByCategory } from '../utils/products';

export async function getStaticProps() {
    // category has id = 10
    const products = await fetchProductsByCategory(10);
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
                <title>Bracelets</title>
                <meta name="description" content="high-quality jewelry, bracelets" />
            </Head>
            <CategoryProductsPage title="Bracelets" products={products} />
        </>
    )
}