import React from "react";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { useAuthenticated } from "../hooks/useAuthenticated";
import { useLocation, useHistory } from "react-router-dom";

export const LoginPage = () => {
  const isAuthenticated = useAuthenticated();
  const location = useLocation<{ from: string }>();
  const history = useHistory();
  const { from } = location.state;
  React.useEffect(() => {
    if (isAuthenticated && from) {
      history.push(from);
    }
  }, [history, from, isAuthenticated]);
  return (
    <div>
      <LoginForm />
    </div>
  );
};
