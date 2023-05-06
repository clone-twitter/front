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

    user().then((response) => {
      if (!response.data) {
        console.log(response)
        setUser(response)
        setAuth(true)
      }
    }).catch((error) => {
      console.log(error)
    })
    
  }, []);

  return (
    <AuthContext.Provider value={{ user, auth }}>{children}</AuthContext.Provider>
  );
};

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth();
  let location = useLocation();

  console.log(auth)

  if (!auth?.auth) {
    return <Navigate to="/explore" state={{ from: location }} replace />;
  }

  return children;
}

export default AuthProvider;