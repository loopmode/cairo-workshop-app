import React from "react";
import { useAuthenticated } from "../../hooks/useAuthenticated";
import LogoutButton from "../LogoutButton/LogoutButton";
import { LoginForm } from "../LoginForm/LoginForm";
import { Switch, Route } from "react-router-dom";

export const HeaderLogin: React.FC = () => {
  const isAuthenticated = useAuthenticated();

  if (isAuthenticated) {
    return <LogoutButton />;
  }
  return (
    <Switch>
      <Route path="/login" render={() => null} />
      <LoginForm />
    </Switch>
  );
};
