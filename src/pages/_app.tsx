import { FC } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { AppProps } from 'next/app';
import NProgress from 'nprogress';

import { withApollo } from 'lib/apollo';
import Layout from 'components/layout';
import GlobalStyles from 'styles';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <title>NyxWeb v2</title>
        <link rel='icon' type='image/png' href='/images/favicon.png' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='stylesheet' type='text/css' href='/css/nprogress.css' />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
};

export default withApollo(App);
