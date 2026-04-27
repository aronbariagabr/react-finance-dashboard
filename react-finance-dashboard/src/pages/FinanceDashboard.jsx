import React, { useState } from 'react';

const FinanceDashboard = () => {
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [transactionHistory, setTransactionHistory] = useState([]);
    const [error, setError] = useState('');

    const handleAmountChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value) && value >= 0) {
            setAmount(value);
            setError('');
        } else {
            setError('Please enter a valid positive number.');
        }
    };

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (error) return;
        const formattedAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
        setTransactionHistory([...transactionHistory, { amount: formattedAmount, currency }]);
        setAmount('');
    };

    return (
        <div>
            <h1>Finance Dashboard</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={amount} onChange={handleAmountChange} placeholder="Enter amount" />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <select value={currency} onChange={handleCurrencyChange}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
                <button type="submit">Add Transaction</button>
            </form>
            <h2>Transaction History</h2>
            <ul>
                {transactionHistory.map((transaction, index) => (
                    <li key={index}>{transaction.amount} {transaction.currency}</li>
                ))}
            </ul>
        </div>
    );
};

export default FinanceDashboard;
