import CategoryProductsPage from '../components/categoryProductsPage';
import Head from 'next/head';
import { CategoryProduct } from '../types/product';
import { fetchProductsByCategory } from '../utils/products';

export async function getStaticProps() {
    // Gold category has id = 8
    const products = await fetchProductsByCategory(8);
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
                <title>Gold Jewelry</title>
                <meta name="description" content="high-quality jewelry, gold jewelry" />
            </Head>
            <CategoryProductsPage title="Gold Jewelry" products={products} />
        </>
    )
}