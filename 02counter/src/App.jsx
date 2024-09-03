import { useState } from "react";
import "./App.css";

// react control ui updation
// using react hooks

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Sajal | React</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>

      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;

//9350040661 - carpenter
