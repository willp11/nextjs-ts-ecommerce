import CategoryProductsPage from '../components/categoryProductsPage';
import Head from 'next/head';
import { CategoryProduct } from '../types/product';
import { fetchProductsByCategory } from '../utils/products';

export async function getStaticProps() {
    // category has id = 2
    const products = await fetchProductsByCategory(2);
    return {
        props: {
            products
        }
    }
}

export default function Necklaces({products}: {products: CategoryProduct[]}) {

    return (
        <>
            <Head>
                <title>Necklaces</title>
                <meta name="description" content="high-quality jewelry, necklaces" />
            </Head>
            <CategoryProductsPage title="Necklaces" products={products} />
        </>
    )
}