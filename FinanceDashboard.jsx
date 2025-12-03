import React, { useState } from "react";

function FinanceDashboard() {
  const [balance, setBalance] = useState(1000);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Finance Dashboard</h2>
      <p>Current Balance: ${balance}</p>
      <button onClick={() => setBalance(balance + 100)}>Deposit $100</button>
      <button onClick={() => setBalance(balance - 100)}>Withdraw $100</button>
    </div>
  );
}

export default FinanceDashboard;
