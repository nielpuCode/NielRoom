import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Room</title>
        <link rel="icon" href="/kursi.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
  
}
