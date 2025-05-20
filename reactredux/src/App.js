import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
  resetValue,
} from "./features/counter/counter";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch(); // Use useDispatch to get the dispatch function

  const [amount, setAmount] = useState(0);
  function handleIncrementClick() {
    // Dispatch an action to increment the count
    dispatch(increment());
    console.log("Increment button clicked");
  }
  function handleDecrementClick() {
    // Dispatch an action to decrement the count
    dispatch(decrement());
    console.log("Decrement button clicked");
  }

  function handleReset() {
    // Dispatch an action to reset the count
    dispatch(resetValue());
    console.log("Reset button clicked");
  }

  function handleIncAmount() {
    // Dispatch an action to increment the count by the specified amount
    dispatch(incrementByAmount(amount));
    console.log("Increment by amount button clicked");
  }
  return (
    <>
      <div className="container">
        <button onClick={handleIncrementClick}>+</button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}>-</button>{" "}
        <button onClick={handleReset}>Reset</button>
        <input
          type="number"
          value={amount}
          placeholder="Enter amount"
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <br />
        <br />
        <button onClick={handleIncAmount}>Increase by Amount</button>
        <p>
          This is a simple counter application using React and Redux. Click the
          buttons to increment, decrement, or reset the count.
        </p>
      </div>
    </>
  );
}

export default App;
