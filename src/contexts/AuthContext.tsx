import React, { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface User {
  id: string;
  email: string;
  role: "ADMIN" | "CLIENT" | "BUSINESS";
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  logout: () => {},
  isLoading: true,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userString = localStorage.getItem("user");

    if (token && userString) {
      const parsedUser: User = JSON.parse(userString);
      setUser(parsedUser);
    } else {
      setUser(null);
    }

    setIsLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
