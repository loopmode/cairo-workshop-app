import fakeAuth from "fake-auth";
import { AppThunk } from "../store";
import {
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  registerSuccess,
  registerError
} from "../slices/auth";

const wait = (delay: number) =>
  new Promise(resolve => setTimeout(resolve, delay));

export const login = (
  email: string,
  password: string
): AppThunk => async dispatch => {
  try {
    await wait(Math.random() * 1000);
    const user = await fakeAuth.signin(email, password);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginError(error.toString()));
  }
};

export const logout = (): AppThunk => async dispatch => {
  try {
    await fakeAuth.signout();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.toString()));
  }
};

export const register = (
  email: string,
  password: string
): AppThunk => async dispatch => {
  try {
    await wait(Math.random() * 1000);
    const user = await fakeAuth.signup(email, password);
    dispatch(registerSuccess(user));
  } catch (error) {
    dispatch(registerError(error.toString()));
  }
};
