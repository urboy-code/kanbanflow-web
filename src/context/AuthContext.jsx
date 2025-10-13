'use client';

import React, { createContext, useState, useContext } from 'react';
import { registerUser as apiRegister, loginUser as apiLogin } from '../services/api';

const AuthContext = createContext();

// Create provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const response = await apiLogin(credentials);

    setUser({ email: credentials.email });
    return response;
  };

  const register = async (credentials) => {
    const response = await apiRegister(credentials);
    return response;
  };

  const logout = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>;
}

// custom hook to use the context
export function useAuth() {
  return useContext(AuthContext);
}
