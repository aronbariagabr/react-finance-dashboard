# React Finance Dashboard

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/react-18.2-blue)
![Jest](https://img.shields.io/badge/tests-passing-green)

## 📊 Overview
Interactive finance dashboard built with React. Demonstrates modern frontend design, state management with hooks, and testing discipline. Users can view balances, add deposits/withdrawals, and track transaction history.

## 🛠️ Tech Stack
- React 18.2
- JavaScript (ES6+)
- React Hooks
- Jest / React Testing Library

## 🚀 Features
- View current balance
- Add deposits and withdrawals
- Transaction history list
- Custom hook for state management
- Unit tests for reliability

## ⚡ Quickstart
```bash
git clone https://github.com/aronbariagabr/react-finance-dashboard.git
cd react-finance-dashboard
npm install
npm start

##📂 Repository Structure
react-finance-dashboard/
├── src/
│   ├── components/
│   │   ├── BalanceCard.jsx
│   │   ├── TransactionForm.jsx
│   │   └── TransactionHistory.jsx
│   ├── hooks/
│   │   └── useTransactions.js
│   ├── App.jsx
│   └── index.js
├── tests/
│   └── Dashboard.test.js
├── package.json
└── README.md

## 🏗️ Architecture Diagram (Mermaid)
flowchart TD
    User[User Input] --> Form[TransactionForm]
    Form --> Hook[useTransactions]
    Hook --> Balance[BalanceCard]
    Hook --> History[TransactionHistory]
    Balance --> UI[Updated UI]
    History --> UI
