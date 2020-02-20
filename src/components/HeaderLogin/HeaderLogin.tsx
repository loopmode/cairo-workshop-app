import React from "react";
import { useAuthenticated } from "../../hooks/useAuthenticated";
import LogoutButton from "../LogoutButton/LogoutButton";
import { NavLink } from "react-router-dom";

export const HeaderLogin: React.FC = () => {
  const isAuthenticated = useAuthenticated();

  if (isAuthenticated) {
    return <LogoutButton />;
  }
  return <NavLink to="/login">Log in</NavLink>;
};
