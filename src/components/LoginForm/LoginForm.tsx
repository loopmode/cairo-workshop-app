import React, { FormEvent, ChangeEvent } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../model/rootReducer";
import { register, login } from "../../model/api/auth";

interface FormState {
  email: string;
  password: string;
}

const initialState: FormState = {
  email: "",
  password: ""
};

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const error = useSelector<RootState, string | null>(
    state => state.auth.error
  );

  const [state, setState] = React.useState<FormState>(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };
  const handleRegister = () => {
    dispatch(register(state.email, state.password));
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(login(state.email, state.password));
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input
        value={state.email}
        onChange={handleChange}
        name="email"
        type="email"
        required
      />
      <input
        value={state.password}
        onChange={handleChange}
        name="password"
        type="password"
        required
      />
      <button type="submit">Login</button>
      <button type="button" onClick={handleRegister}>
        Register
      </button>
    </form>
  );
};
