import React, { FormEvent, ChangeEvent } from "react";
import { useAuthContext } from "../../model/context";

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

    const loggedIn = await authService.login(state.username, state.password);
    console.log({ loggedIn });
  };

  const handleRegister = async (event: any) => {
    event.preventDefault();

    const registered = await authService.register(state.username, state.password);
    console.log({ registered });
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
