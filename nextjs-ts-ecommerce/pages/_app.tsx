import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { CartProvider } from '../hooks/useCart';
import {MessageProvider} from '../hooks/useMessage';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

function MyApp({ Component, pageProps }: AppProps) {

    const router = useRouter();

    useEffect(() => {
        const handleStart = (url: string) => {
          console.log(`Loading: ${url}`)
          NProgress.start()
        }
    
        const handleStop = () => {
          NProgress.done()
        }
    
        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleStop)
        router.events.on('routeChangeError', handleStop)
    
        return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleStop)
          router.events.off('routeChangeError', handleStop)
        }
    }, [router])

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
