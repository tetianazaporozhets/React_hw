import { useReducer } from "react";

const ReducerExemple = () => {
  const initialState = { value: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { value: state.value + 1 };
      case "DECREMENT":
        return { value: state.value - 1 };
      case "RESET":
        return { value: 0 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div>
      <h2>Counter: {state.value}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ReducerExemple;
