import React, { FC, useEffect } from "react";
import AppLogo from "../component/UI/AppLogo";
import { useAuth } from "../context/auth/Auth";
import { useNavigate } from "react-router-dom";

export interface GuestProps {
  children: React.ReactNode;
}
const Guest: FC<GuestProps> = ({ children }) => {

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
   useEffect(()=> {
    if(isAuthenticated){
      navigate("/");
    }
   })


  return (
    <section className="vh-100 vw-100 d-flex mx-auto  align-items-center">
      <section className="m-auto  container-fluid vstack align-items-center">
        <section>
          <AppLogo />
        </section>
        {children}
      </section>
    </section>
  );
};

export default Guest;
