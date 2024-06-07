import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/graphql/client';
import { Provider } from 'jotai';
import { SessionProvider } from 'next-auth/react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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