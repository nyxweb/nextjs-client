import Router from 'next/router';
import App, { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as OvermindProvider } from 'overmind-react';
import Progress from 'nprogress';
import {
  createOvermind,
  createOvermindSSR,
  Overmind,
  OvermindSSR,
} from 'overmind';
import { config, Config } from 'brains';
import Layout from 'components/layout';

// Styles
import GlobalStyles from 'styles/global';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'styles/nprogress.css';

class NyxWeb extends App {
  brains: Overmind<Config> | OvermindSSR<Config>;

  constructor(props: AppProps) {
    super(props);

    if (typeof window !== 'undefined') {
      this.brains = createOvermind<Config>(config as Config);
    } else {
      this.brains = createOvermindSSR<Config>(config as Config);
    }
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', Progress.start);
    Router.events.on('routeChangeComplete', Progress.done);
    Router.events.on('routeChangeError', Progress.done);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', Progress.start);
    Router.events.off('routeChangeComplete', Progress.done);
    Router.events.off('routeChangeError', Progress.done);
  }

  render() {
    const { Component } = this.props;

    return (
      <OvermindProvider value={this.brains}>
        <Layout>
          <Head>
            <title>{this.brains.state.app.title}</title>
            <link rel='icon' type='image/png' href='/images/favicon.png' />
            <meta
              name='viewport'
              content='initial-scale=1.0, width=device-width'
            />
          </Head>
          <GlobalStyles />
          <Component {...this.props.pageProps} />
        </Layout>
      </OvermindProvider>
    );
  }
}

export default NyxWeb;
