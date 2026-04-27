import React from "react";
import BalanceCard from "./components/BalanceCard";
import TransactionForm from "./components/TransactionForm";
import TransactionHistory from "./components/TransactionHistory";
import { useTransactions } from "./hooks/useTransactions";

const App = () => {
  const { balance, transactions, addTransaction } = useTransactions();

  return (
    <div className="dashboard">
      <h1>Finance Dashboard</h1>
      <BalanceCard balance={balance} />
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default App;
