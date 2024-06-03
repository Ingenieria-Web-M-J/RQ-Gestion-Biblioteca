import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/graphql/client';

import { Provider } from 'jotai';
import { SessionProvider } from 'next-auth/react';
export default function App({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <ApolloProvider client={client}>
      <Provider>
        <SessionProvider session={session}>
        
            <Component {...pageProps} />
          
        </SessionProvider>
      </Provider>
    </ApolloProvider>
  );
}