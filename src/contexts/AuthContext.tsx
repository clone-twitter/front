import React, { createContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/auth";
import { AuthService } from "../services/authService";
import { IUser } from "../interfaces/User";

export interface AuthContextType {
  user?: IUser;
}

export let AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  
  let [user, setUser] = useState<IUser>();
  let [loader, setLoader] = useState<boolean>(true);
  
  const authService = new AuthService()

  useEffect(() => {
    const user = async () => {
      const response = await authService.getAuthUser()
      return response
    }

    user().then((response) => {
      if (!response.error) {
        setUser(response)
        setLoader(false)
      }
    }).catch((error) => {
      console.log(error)
    })
    
  }, []);

  if (loader) { return null }
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth();
  let location = useLocation();

  console.log(auth)

  if (!auth?.user) {
    return <Navigate to="/explore" state={{ from: location }} replace />;
  }

  return children;
}

export default AuthProvider;