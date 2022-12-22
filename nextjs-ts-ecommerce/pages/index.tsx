import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/hero'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Grace Collection Jewelry</title>
                <meta name="description" content="Jewellery Store. We sell rings, necklaces and bracelets." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
        </div>
    )
}

export default Home
