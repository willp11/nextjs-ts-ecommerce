import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { CartProvider } from '../hooks/useCart';
import {MessageProvider} from '../hooks/useMessage';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CartProvider>
            <MessageProvider>
                <Layout>
                    <Head>
                        <link rel="shortcut icon" href="/images/favicon.ico?v=2" />
                        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
                        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
                    </Head>
                    <Component {...pageProps} />
                </Layout>
            </MessageProvider>
        </CartProvider>
    )
}

export default MyApp
