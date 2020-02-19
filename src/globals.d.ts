declare module "fake-auth" {
  type User = { email: string; password: string };
  export function signup(email: string, pass: string): Promise<User>;
  export function signin(email: string, pass: string): Promise<User>;
  export function signout(): Promise<void>;
  export function onChange(callback: (user: User) => void): void;
  export function sendPasswordResetEmail(email: string): Promise<void>;
  export function confirmPasswordReset(email: string, code: string): Promise<void>;
}

declare namespace NodeJS {
  export interface ProcessEnv {
    REACT_APP_USERS_API: string;
    NODE_ENV: "development" | "production";
  }
}
