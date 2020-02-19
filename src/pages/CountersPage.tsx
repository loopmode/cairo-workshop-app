import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../model/rootReducer";

export const CountersPage = () => {
  return (
    <div>
      <h1>Reusing reducer logic</h1>
      <p>
        Based on{" "}
        <a href="https://redux.js.org/recipes/structuring-reducers/reusing-reducer-logic/">
          reusing-reducer-logic
        </a>
      </p>
      <Counter name="counterA" />
      <Counter name="counterB" />
      <Counter name="counterC" />
    </div>
  );
};

function Counter({ name }: { name: "counterA" | "counterB" | "counterC" }) {
  const dispatch = useDispatch();
  const value = useSelector<RootState, number>(state => state[name]);
  return (
    <div>
      <button onClick={() => dispatch({ type: "DECREMENT", name })}>-</button>
      <code>{' '}{value}{' '}</code>
      <button onClick={() => dispatch({ type: "INCREMENT", name })}>+</button>
    </div>
  );
}
