import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Holds the authenticated user state

  const login = (userData) => setUser(userData); // Function to log in a user
  const logout = () => setUser(null); // Function to log out the user

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
