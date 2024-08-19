import Header from "./components/Header";
import Input from "./components/Input";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInput(event, field) {
    setUserInputs((prevState) => ({
      ...prevState,
      [field]: +event.target.value,
    }));
  }
  return (
    <>
      <div id="body">
        <Header />
        <Input onEdit={handleInput} inputs={userInputs} />
        <Results inputData={userInputs} />
      </div>
    </>
  );
}

export default App;
