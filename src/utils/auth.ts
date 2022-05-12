import axios from 'axios';
import { NextPageContext } from 'next';
import { User } from '../types/global';

export const getUserFromContext = async (context: NextPageContext) => {
  const { authToken } = (context.req as any).cookies;
  if (!authToken) {
    return null;
  }

  const res = await axios.get<User>('https://trading-platform-3d.herokuapp.com/api/users/me/', {
    headers: { Authorization: `Bearer ${authToken}` },
  });

  return res.data;
};
