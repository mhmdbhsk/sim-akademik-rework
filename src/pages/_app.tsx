import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import ThemeProvider from 'context/Theme';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import createCache from '@emotion/cache';
import { theme } from '@theme';
import { useRestoreTheme, useRestoreAccent } from '@hooks';

export const cache = createCache({ key: 'css', prepend: true });

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </ThemeProvider>
    </CacheProvider>
  );
}

const AppWrapper = ({ children }) => {
  const restoreTheme = useRestoreTheme();
  const restoreAccent = useRestoreAccent();

  useEffect(() => {
    restoreTheme();
    restoreAccent();
  }, []);

  return <Fragment>{children}</Fragment>;
};
