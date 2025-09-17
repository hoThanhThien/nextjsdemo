import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';

// Mock user for development
const mockUser: User = {
  id: '410544b2-4001-4271-9855-fec4b6a6442a',
  name: 'User',
  email: 'user@nextmail.com',
  password: '$2b$10$K8QVw8.eLvOI20H/nxyq.OdAthHXiP2Du9SWelzSBBMdJpC3QvSqG', // bcrypt hash of '123456'
};
 
async function getUser(email: string): Promise<User | undefined> {
  try {
    console.log('Mock: Fetching user for email:', email);
    
    // Mock implementation: return mock user if email matches
    if (email === mockUser.email) {
      return mockUser;
    }
    return undefined;
  } catch (error) {
    console.error('Mock: Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }
 
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});