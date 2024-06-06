import NextAuth, { NextAuthOptions } from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/config/prisma';

const options: NextAuthOptions = {
  providers: [
    Auth0Provider({
      wellKnown: `https://${process.env.AUTH0_DOMAIN}/`,
      issuer: process.env.AUTH0_DOMAIN,
      authorization: `https://${process.env.AUTH0_DOMAIN}/authorize?response_type=code&prompt=login`,
      clientId: `${process.env.AUTH0_CLIENT_ID}`,
      clientSecret: `${process.env.AUTH0_CLIENT_SECRET}`,
    }),
  ],
  secret: process.env.AUTH0_CLIENT_SECRET,
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn({ user }) {
      // Asigna un valor al campo password si no está presente
      if (!user.password) {
        user.password = user.id; // Puedes generar una contraseña segura aquí
      }
      // Asigna un valor al campo role si no está presente
      if (!user.role) {
        user.role = 'USER'; // O el rol que consideres por defecto
      }
      return true;
    },
    async session({ session, user }) {
      // Incluye el objeto completo `user` en la sesión
      if (session.user) {
        session.user.role = user.role; // Añadir el rol al objeto user en la sesión
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // Añadir el rol al token JWT
      }
      return token;
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
export { options };
