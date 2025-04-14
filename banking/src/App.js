import React, { useState } from "react";
import "./App.scss"; 
const App = () => {
  const [balance, setBalance] = useState(1000);

  const addMoney = () => {
    setBalance(balance + 100);
  };


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Bank Account</h2>
      <p>Balance: Rs.{balance}/-</p>
      <button onClick={addMoney}>Add Rs.100/-</button>
    </div>
  );
};

export default App;
