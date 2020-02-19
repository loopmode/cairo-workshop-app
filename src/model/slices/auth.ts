import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "fake-auth";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: string | null;
}
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // we can directly return a new state object, as usual with immutable redux state
    loginError(state, action: PayloadAction<string>) {
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false
      };
    },
    loginSuccess(state, action: PayloadAction<User>) {
      return {
        ...state,
        error: null,
        isAuthenticated: false,
        user: action.payload
      };
    },
    // but because @reduxjs/toolkit is using immer.js, we can also seemingly mutate the state
    logoutError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    //
    // be careful! you can not mix mutation and return style:
    registerSuccess(state, action: PayloadAction<User>) {
      // this would fail:
      // state.isAuthenticated = true; // mutation creates draft state, but it would only be applied to actual state later
      // return { ...state, user: action.payload }; // copy all properties from _current_ state object, losing mutations on the draft
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    registerError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    }
  }
});

export const {
  loginError,
  loginSuccess,
  logoutError,
  logoutSuccess,
  registerError,
  registerSuccess
} = authSlice.actions;

export default authSlice.reducer;

// "public" thunks
