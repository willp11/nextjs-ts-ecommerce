import CategoryProductsPage from '../components/categoryProductsPage';
import Head from 'next/head';
import { CategoryProduct } from '../types/product';
import { fetchProductsByCategory } from '../utils/products';

export async function getStaticProps() {
    // category has id = 4
    const products = await fetchProductsByCategory(4);
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
                <title>Stainless Steel Jewelry</title>
                <meta name="description" content="high-quality jewelry, Stainless Steel Jewelry" />
            </Head>
            <CategoryProductsPage title="Stainless Steel Jewelry" products={products} />
        </>
    )
}