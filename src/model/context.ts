import { MockAuthService, AuthService } from "./auth";
import React from "react";

import localforage from "localforage";

export const authService = new MockAuthService(localforage);
export const AuthContext = React.createContext<AuthService>(authService);

export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;

export const useAuth = () => React.useContext(AuthContext);
