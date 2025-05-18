import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounterValue] = useState(1);
  //let counter = 1;

  const addValue = () => {
    //console.log("Value Added: ", Math.random());
    if (counter === 20) {
      alert("You have reached the maximum value!");
      return;
    }

    //In React, the setState (in your case, setCounterValue) function does not immediately update the state.
    // Instead, it schedules a state update and re-renders the component.
    // This is why when you call setCounterValue(counter + 1) multiple times in succession, it doesn't update the counter as expected.
    // React batches state updates, so it only updates once after all the updates are applied, and it uses the value of the state before the update.
    // setCounterValue(counter + 1);
    // setCounterValue(counter + 1);
    // setCounterValue(counter + 1);
    // setCounterValue(counter + 1);

    setCounterValue((preCounter) => preCounter + 1);
    setCounterValue((preCounter) => preCounter + 1);
    setCounterValue((preCounter) => preCounter + 1);
    setCounterValue((preCounter) => preCounter + 1);
  };

  const removeValue = () => {
    // console.log("Value Added: ", Math.random());
    if (counter <= 0) {
      alert("Value should be greater that 0");
      return;
    }
    setCounterValue(counter - 1);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
<>this is called fragment</>;
