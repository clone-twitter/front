import React, { createContext, useEffect, useState } from "react";
import { UserService } from "../services/userService";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/auth";
import { AuthService } from "../services/authService";
import { IUser } from "../interfaces/User";

export interface AuthContextType {
  user?: IUser;
  auth: boolean | null;
}

export let AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  
  let [user, setUser] = useState<IUser>();
  let [auth, setAuth] = useState<boolean | null>(null);
  
  const userService = new UserService()
  const authService = new AuthService()

  useEffect(() => {
    const user = async () => {
      const response = await userService.getAuthUser()
      return response
    }

    const auth = async (): Promise<boolean | null> => {
      const response = authService.isAuthenticated
      return response
    }

    auth().then((response) => {
      setAuth(response)
    })

    user().then((response) => {
      setUser(response)
    })
    
  }, []);

  console.log('user', user)

  return (
    <AuthContext.Provider value={{ user, auth }}>{children}</AuthContext.Provider>
  );
};

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth?.auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  console.log('auth', auth)

  return children;
}

export default AuthProvider;