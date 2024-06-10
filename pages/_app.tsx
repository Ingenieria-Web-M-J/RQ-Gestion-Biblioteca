import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/graphql/client';
import { Provider } from 'jotai';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function App({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <ApolloProvider client={client}>
      <Provider>
        <SessionProvider session={session}>
      
            <Component {...pageProps} />
            <ToastContainer
            position='top-center'
            autoClose={5000}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover
            theme='colored'
          />
        </SessionProvider>
      </Provider>
    </ApolloProvider>
  );
}