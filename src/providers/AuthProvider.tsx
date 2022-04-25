import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';

const useAuthProviderController = () => {
  const [authToken, setAuthToken] = useState<string | null>(null);

  return {
    authToken,
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
