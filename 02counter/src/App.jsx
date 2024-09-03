import "./App.css";

function App() {
  let counter = 15;

  const addValue = () => {
    console.log("value added", Math.random());
  };

  return (
    <>
      <h1>Sajal | React</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>

      <button>Remove Value</button>
    </>
  );
}

export default App;
