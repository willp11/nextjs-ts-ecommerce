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

export default function Silver({products}: {products: CategoryProduct[]}) {

    return (
        <>
            <Head>
                <title>Silver Jewelry</title>
                <meta name="description" content="high-quality jewelry, Silver Jewelry" />
            </Head>
            <CategoryProductsPage title="Silver Jewelry" products={products} />
        </>
    )
}