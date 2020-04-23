import Head from 'next/head';
import Layout from '../components/layout';
import GlobalStyles from '../styles';

const App: any = ({ Component, pageProps }: any) => {
  return (
    <Layout>
      <Head>
        <title>NyxWeb v2</title>
        <link rel='icon' type='image/png' href='/images/favicon.png' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
