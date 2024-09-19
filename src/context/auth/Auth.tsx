import { useContext, useState, createContext } from "react";
import { User } from "../../type/Model/User.model";

interface AuthContextProps {
  isAuthenticated: boolean;
  Login: (token: string) => void;
  Logout: () => void;
  authUser : ()=> User | null
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const Login = (token: string) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const Logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const authUser = ()=> {
       return null;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, Login, Logout , authUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {

            // localStorage.removeItem("token")
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
