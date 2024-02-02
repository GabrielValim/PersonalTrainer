import Head from 'next/head';
import About from '../src/components/patterns/About';
import Hero from '../src/components/patterns/Hero';
import Classes from '../src/components/patterns/Classes';
import Price from '../src/components/patterns/Price';


export default function HomePage() {
    return (
        <>
            <Head>
                <title>HomePage</title>
            </Head>
            <Hero />
            <About />
            <Classes/>
            <Price />
        </>
    )
}