import { useState } from "react";
import "./App.css";
// https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  console.log(amount);

  return (
    <div className="App">
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </div>
  );
}

export default App;
