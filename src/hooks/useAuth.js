import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthGuard = ({ children }) => {
  const [auth, setAuth] = useState(false);

  // todo: here we can make a request to backend to confirm if the token is still valid or not.

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
