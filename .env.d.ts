declare namespace NodeJS {
  export interface ProcessEnv {
    REACT_APP_USERS_API: string;
    NODE_ENV: "development" | "production";
  }
}
