import { useSelector } from "react-redux";
import { RootState } from "../model/rootReducer";
import { User } from "fake-auth";

export function useAuthenticated() {
  const user = useSelector<RootState, User | null>(state => state.auth.user);
  return user !== null;
}
