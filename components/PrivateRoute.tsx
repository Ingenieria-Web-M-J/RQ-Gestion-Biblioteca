/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSession, signIn } from 'next-auth/react';
import React from 'react';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  // eslint-disable-next-line no-console
  console.log('session :>> ', session);
  if (!session) {
    // signIn('auth0');
  }
  if (status === 'loading' || !session) {
   
  }

  return <>{children}</>;
};

export default PrivateRoute;
