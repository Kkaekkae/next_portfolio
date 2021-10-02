import React from 'react';

import { Provider } from 'react-redux';
import Head from 'next/head';
import App from 'next/app';

import withReduxStore from 'utils/with-redux-store';
import { appWithTranslation } from 'utils/with-i18next';

import 'fontsource-metropolis';
import '@typefaces-pack/typeface-inter';
import "antd/dist/antd.css";
import 'assets/css/style.scss';
import 'assets/css/main.scss';

class Srr extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <React.StrictMode>
        <Head>
          <title>React Next Boilerplate</title>
        </Head>

        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </React.StrictMode>
    );
  }
}

export default appWithTranslation(withReduxStore(Srr));
