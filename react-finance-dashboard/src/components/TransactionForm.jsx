import React, { useState } from "react";

const TransactionForm = ({ onAddTransaction }) => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("deposit");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) return;
    onAddTransaction(parseFloat(amount), type);
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="deposit">Deposit</option>
        <option value="withdraw">Withdraw</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default TransactionForm;
