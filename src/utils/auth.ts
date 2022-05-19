import { NextPageContext } from 'next';
import { User } from '../types/global';

export const getTokenFromContext = (context: NextPageContext): string | null => {
  const { authToken } = (context.req as any).cookies;
  return authToken;
};

export const getUserFromContext = async (context: NextPageContext): Promise<User | null> => {
  const { authToken } = (context.req as any).cookies;
  if (!authToken) {
    return null;
  }

  const res = await fetch('https://trading-platform-3d.herokuapp.com/api/users/me/', {
    headers: { Authorization: `Bearer ${authToken}` },
  });

  return res.json();
};
