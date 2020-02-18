import React from "react";
import { Route } from "react-router-dom";
import { LoginForm } from "../LoginForm/LoginForm"; 
import { useAuthenticated } from "../../hooks/useAuthenticated";

export function ProtectedRoute(props) {
  const isLoggedIn = useAuthenticated();
  if (!isLoggedIn) {
    return <LoginForm />;
  }
  return <Route {...props} />;
}
