import earrings from '../products/earrings.json';
import ProductsPage from '../components/productsPage';
import Head from 'next/head';

export default function Earrings() {

    return (
        <>
            <Head>
                <title>Earrings</title>
                <meta name="description" content="high-quality jewelry, earrings" />
            </Head>
            <ProductsPage title="Earrings" products={earrings.earrings} />
        </>
    )
}