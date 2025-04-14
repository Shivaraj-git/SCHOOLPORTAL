import React, { useState } from 'react';
import './Calculator.css'; 

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => setResult(parseFloat(num1) + parseFloat(num2));
  const handleSubtraction = () => setResult(parseFloat(num1) - parseFloat(num2));
  const handleMultiplication = () => setResult(parseFloat(num1) * parseFloat(num2));
  const handleDivision = () => {
    if (parseFloat(num2) === 0) {
      setResult('Cannot divide by zero');
    } else {
      setResult(parseFloat(num1) / parseFloat(num2));
    }
  };

  return (
    <div className="calculator-new">
      <h1>Simple Calculator using REACT</h1>

      <div className="input-section">
        <input
          type="number"
          placeholder="Number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <div className="button-grid">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>x</button>
        <button onClick={handleDivision}>/</button>
      </div>

      <h2 className="result">Result: {result}</h2>
    </div>
  );
}

export default Calculator;
