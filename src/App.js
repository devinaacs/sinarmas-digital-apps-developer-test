import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0);

  function handleInputChange(e) {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setInputValue(value);
  }

  function reverseNumber(num) {
    return parseInt(num.toString().split("").reverse().join(""));
  }

  function handleSubmit() {
    if (inputValue && inputValue !== "0") {
      const number = parseInt(inputValue);
      const reversed = reverseNumber(number);
      const difference = Math.abs(number - reversed);
      setResult(difference);
    }
  }

  return (
    <div className="App">
      <div>
        Number: <input value={inputValue} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}