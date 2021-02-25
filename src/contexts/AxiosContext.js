import React, { createContext, useContext, useMemo } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';

const AxiosContext = createContext();

export const AxiosProvider = ({ children }) => {
  const { auth } = useContext(AuthContext);

  const axios_ = useMemo(
    () =>
      axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
          Authorization: `Bearer ${auth.token}`,
          'Content-Type': 'application/json; charset=UTF-8',
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
