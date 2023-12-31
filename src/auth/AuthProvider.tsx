import { useContext, createContext, useState, useEffect } from "react";
import React from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}
const AuthContext = createContext({
  isAuthenticated: false,
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState<string>("");
  const [refrestToken, setRefresToken] = useState<string>("");

  function getUserToken() {
    return userToken;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
