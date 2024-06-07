import { useSession, signIn } from 'next-auth/react';
import React from 'react';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  console.log('session :>> ', session);
  if (!session) {
    // signIn('auth0');
  }
  if (status === 'loading' || !session) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default PrivateRoute;
