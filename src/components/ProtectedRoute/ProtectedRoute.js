import React from "react";
import { Route } from "react-router-dom";
import { useAuthenticated } from "../../hooks/useAuthenticated";

export function ProtectedRoute({ fallback = null, ...props }) {
  const isLoggedIn = useAuthenticated();
  if (!isLoggedIn) {
    return fallback;
  }
  return <Route {...props} />;
}
