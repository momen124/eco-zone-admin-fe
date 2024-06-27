import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextApiRequest, NextApiResponse } from 'next';

// Mock database function to get user by email
const getUserByEmail = async (email: string) => {
  const users = [
    { id: 1, name: 'Momen', email: 'momen@gmail.com', password: '123456' },
  ];
  return users.find((user) => user.email === email);
};

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'me@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          throw new Error('Credentials are required');
        }
        const { email, password } = credentials;
        const user = await getUserByEmail(email);

        if (!user || user.password !== password) {
          throw new Error('Invalid email or password');
        }

        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }) {
      if (token) session.user.id = token.id;
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);
