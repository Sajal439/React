/* eslint-disable no-unused-vars */
import Card from "./components/card";

function App() {
  // const [count, useCount] = useState(0);
  let myObj = {
    username: "sajal",
    age: 20,
  };

  return (
    <div className="flex justify-center items-center flex-wrap h-full w-full">
      <Card username="sajal goel" btnText="click me !" />
      <Card username="Sajal" btnText="visit me !" />
    </div>
  );
}

export default App;
