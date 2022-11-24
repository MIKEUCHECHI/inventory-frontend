import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorBoundary from '../components/ErrorBoundary';
import { Environment } from '../modules/environment';
import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>
          NomNom Admin Panel{Environment.isProduction ? '' : ' (dev)'}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ErrorBoundary>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default MyApp;
