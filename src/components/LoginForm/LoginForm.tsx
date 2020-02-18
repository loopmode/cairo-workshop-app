import React, { FormEvent, ChangeEvent } from "react";
import { useAuthContext } from "../../model/auth-context";

interface FormState {
  username: string;
  password: string;
}

const initialState: FormState = {
  username: "",
  password: ""
};

export const LoginForm: React.FC = () => {
  const authService = useAuthContext(); 

  const [state, setState] = React.useState<FormState>(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await authService.login(state.username, state.password);
  };

  const handleRegister = async (event: any) => {
    event.preventDefault();
    await authService.register(state.username, state.password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={state.username} onChange={handleChange} name="username" type="text" required />
      <input value={state.password} onChange={handleChange} name="password" type="password" required />
      <button type="submit">Login</button>
      <button type="button" onClick={handleRegister}>
        Register
      </button>
    </form>
  );
};
