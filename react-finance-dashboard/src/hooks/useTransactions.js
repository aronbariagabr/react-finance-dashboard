import { useState } from "react";

export const useTransactions = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (amount, type) => {
    const newBalance =
      type === "deposit" ? balance + amount : balance - amount;
    setBalance(newBalance);
    setTransactions([...transactions, { amount, type }]);
  };

  return { balance, transactions, addTransaction };
};
