import React from "react";
import { useAuthContext } from "../model/auth-context";
import { AuthEvent } from "../model/auth";

export function useAuthenticated() {
  const authService = useAuthContext();
  
  
  
  const [isAuthenticated, setAuthenticated] = React.useState(false);
  
  React.useEffect(() => {
    return authService.on(AuthEvent.LOGGED_IN, () => setAuthenticated(true));
  }, [authService]);

  React.useEffect(() => {
    return authService.on(AuthEvent.LOGGED_OUT, () => setAuthenticated(false));
  }, [authService]);

  return isAuthenticated;
}
