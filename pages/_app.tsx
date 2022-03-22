import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IPB - Tupã</title>
        <meta name="IPB-Tupã" content="Site da Igreja Prebiteriana de Tupã" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
