import CategoryProductsPage from '../components/categoryProductsPage';
import Head from 'next/head';
import { CategoryProduct } from '../types/product';
import { fetchProductsByCategory } from '../utils/products';

export async function getStaticProps() {
    // Gold category has id = 3
    const products = await fetchProductsByCategory(3);
    return {
        props: {
            products
        }
    }
}

export default function Gold({products}: {products: CategoryProduct[]}) {

    return (
        <>
            <Head>
                <title>Gold Jewelry</title>
                <meta name="description" content="high-quality jewelry, gold jewelry" />
            </Head>
            <CategoryProductsPage title="Gold Jewelry" products={products} />
        </>
    )
}