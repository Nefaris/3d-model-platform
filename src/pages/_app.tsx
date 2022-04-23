import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>3D Trading Platform</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
