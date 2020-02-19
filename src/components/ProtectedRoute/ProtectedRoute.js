import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthenticated } from "../../hooks/useAuthenticated";

export function ProtectedRoute({ fallback = null, ...props }) {
  const isLoggedIn = useAuthenticated();
  if (!isLoggedIn) {
    if (fallback) {
      return fallback;
    }
    return (
      <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }
  return <Route {...props} />;
}
