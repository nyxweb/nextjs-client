import Router from 'next/router';
import App, { AppProps } from 'next/app';
import { Provider as OvermindProvider } from 'overmind-react';
import Progress from 'nprogress';
import {
  createOvermind,
  createOvermindSSR,
  rehydrate,
  Overmind,
  OvermindSSR,
} from 'overmind';
import { config, Config } from 'brains';
import 'styles/nprogress.css';
import GlobalStyles from 'styles/global';
import Layout from 'components/layout';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class MyApp extends App {
  store: Overmind<Config> | OvermindSSR<Config>;

  // CLIENT: On initial route
  // SERVER: On initial route
  constructor(props: AppProps) {
    super(props);

    const mutations = props.pageProps.mutations || [];

    if (typeof window !== 'undefined') {
      // On the client we just instantiate the Overmind instance and run
      // the "changePage" action
      this.store = createOvermind<Config>(config as Config);
      // this.store.actions.changePage(mutations);
    } else {
      // On the server we rehydrate the mutations to an SSR instance of Overmind,
      // as we do not want to run any additional logic here
      this.store = createOvermindSSR<Config>(config as Config);
      rehydrate(this.store.state, mutations);
    }
  }

  componentDidUpdate() {
    // this.store.actions.changePage(this.props.pageProps.mutations || []);
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', () => Progress.start());
    Router.events.on('routeChangeComplete', () => Progress.done());
    Router.events.on('routeChangeError', () => Progress.done());
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', () => Progress.start());
    Router.events.off('routeChangeComplete', () => Progress.done());
    Router.events.off('routeChangeError', () => Progress.done());
  }

  render() {
    const { Component } = this.props;

    return (
      <OvermindProvider value={this.store}>
        <Layout>
          <GlobalStyles />
          <Component {...this.props.pageProps} />
        </Layout>
      </OvermindProvider>
    );
  }
}

export default MyApp;
