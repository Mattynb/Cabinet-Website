import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [account, setAccount] = useState(null);

  const login = (accountInfo) => {
    setIsLoggedIn(true);
    setAccount(accountInfo);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setAccount(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, account, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
