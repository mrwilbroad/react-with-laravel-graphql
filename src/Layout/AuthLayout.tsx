import React, { FC, useEffect } from "react";
import NavBarComponent from "../component/navbar/NavBar";
import { useAuth } from "../context/auth/Auth";
import { useNavigate } from "react-router-dom";

export interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  });

  return (
    <React.Fragment>
      <NavBarComponent />
      {children}
    </React.Fragment>
  );
};

export default AuthLayout;
