import React, { createContext, useContext, useMemo } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';

const AxiosContext = createContext();

export const AxiosProvider = ({ children }) => {
  const { auth } = useContext(AuthContext);

  const axios_ = useMemo(
    () =>
      axios.create({
        baseURL: 'https://test-payprotocol.teledit.com:8090',
        headers: {
          Authorization: `Bearer ${auth.token}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }),
    [auth],
  );

  return (
    <AxiosContext.Provider value={{ axios: axios_ }}>
      {children}
    </AxiosContext.Provider>
  );
};

export default AxiosContext;
