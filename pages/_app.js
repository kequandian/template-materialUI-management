import React from 'react';
import Router from 'next/router';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '@/src/theme';
import LinearProgress from '@material-ui/core/LinearProgress';

import PrimaryLayout from '@/src/framework/PrimaryLayout';

const styles = {
  root: {
    zIndex: 1300,
  },
};

class MyApp extends App {
  state = {
    loading: false,
  };
  componentDidMount() {
    Router.events.on('routeChangeStart', (url) => {
      this.showLoading();
    });

    Router.events.on('routeChangeComplete', () => {
      this.hideLoading();
    });

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  showLoading = () => {
    this.setState({ loading: true })
  };
  hideLoading = () => {
    this.setState({ loading: false })
  };

  render() {
    const { classes, Component, pageProps } = this.props;
    const { loading } = this.state;

    return (
      <Container>
        <Head>
          <title>后台应用</title>
        </Head>
        <ThemeProvider theme={theme}>
          {loading ?
            <LinearProgress classes={classes} color="secondary" />
            : null
          }
          <CssBaseline />
          <PrimaryLayout>
            <Component {...pageProps} />
          </PrimaryLayout>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withStyles(styles)(MyApp);