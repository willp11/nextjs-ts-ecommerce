import {products} from '../products/products';
import ProductsPage from '../components/productsPage';
import Head from 'next/head';
import { Product } from '../types/product';
import axios from 'axios';
import { apiPrefix } from '../utils/apiPrefix';

export async function getStaticProps() {
    const headers = {'Content-Type': 'application/json'};
    try {
        const url = `${apiPrefix}product-list-get/`;
        const res = await axios.get(url, {headers: headers});
        const products = res.data;
        return {
            props: {
                products
            }
        }
    } catch(e) {
        console.log(e);
        return [];
    }
}

export default function Jewelry({products}: {products: Product[]}) {
    return (
        <>
            <Head>
                <title>Jewelry</title>
                <meta name="description" content="high-quality jewelry, rings, necklaces, bracelets, earrings" />
            </Head>
            <ProductsPage title="Jewelry" products={products} />
        </>
    )
}