import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import { LoginResponse, RegisterResponse, User } from '../types/global';
import { LocalStorageKeys } from '../constants/local-storage-keys.enum';

const useAuthProviderController = () => {
  const [user, setUser] = useState<User | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);

  useEffect(() => {
    if (authToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
      axios.get<User>('https://trading-platform-3d.herokuapp.com/api/users/me/').then((res) => {
        setUser(res.data);
      });
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [authToken]);

  useEffect(() => {
    const token = localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);
    if (token) {
      setAuthToken(token);
    }
  }, []);

  const registerMutation = useMutation(async (registerData: any) => {
    const res = await axios.post('https://trading-platform-3d.herokuapp.com/api/auth/register/', registerData);
    return res.data;
  });

  const loginMutation = useMutation(async (loginData: any) => {
    const res = await axios.post('https://trading-platform-3d.herokuapp.com/api/auth/token/', loginData);
    return res.data;
  });

  const register = async (formData: any) => {
    return new Promise<void>((resolve, reject) => {
      registerMutation.mutate(formData, {
        onSuccess: (res: RegisterResponse) => {
          localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, res.accessToken);
          setAuthToken(res.accessToken);
          toast.success('Successfully registered!');
          resolve();
        },
        onError: () => {
          toast.error('Something went wrong!');
          reject();
        },
      });
    });
  };

  const login = async (formData: any) => {
    return new Promise<void>((resolve, reject) => {
      loginMutation.mutate(formData, {
        onSuccess: (res: LoginResponse) => {
          localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, res.accessToken);
          setAuthToken(res.accessToken);
          toast.success('Successfully logged in!');
          resolve();
        },
        onError: () => {
          toast.error('Invalid credentials!');
          reject();
        },
      });
    });
  };

  const logout = () => {
    localStorage.removeItem(LocalStorageKeys.AUTH_TOKEN);
    setAuthToken(null);
    setUser(null);
  };

  return {
    user,
    login,
    register,
    logout,
  };
};

const AuthContext = createContext<ReturnType<typeof useAuthProviderController> | null>(null);

const AuthProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const value = useAuthProviderController();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export default AuthProvider;
