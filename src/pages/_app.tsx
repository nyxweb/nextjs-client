import { AppProps } from 'next/app';
import Head from 'next/head';
import { withApollo } from '../lib/apollo';

import Layout from '../components/layout';
import GlobalStyles from '../styles';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => {
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

export default withApollo(App);
