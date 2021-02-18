import React, { createContext } from 'react';
import { useSessionStorage } from 'react-use';

const AuthContext = createContext({
  auth: {},
  setAuth: () => {},
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useSessionStorage('auth', {});

  const value = {
    auth,
    setAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
