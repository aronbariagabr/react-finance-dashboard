# React Finance Dashboard

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🛠️ Tech Stack
[![React](https://img.shields.io/badge/React-18.2-blue?logo=react)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)]()
[![Jest](https://img.shields.io/badge/Jest-passing-green?logo=jest)]()

- React 18.2  
- JavaScript (ES6+)  
- React Hooks  
- Jest / React Testing Library  

## 📊 Overview
Interactive finance dashboard built with React. Demonstrates modern frontend design, state management with hooks, and testing discipline. Users can view balances, add deposits/withdrawals, and track transaction history.

## 🚀 Features
- View current balance  
- Add deposits and withdrawals  
- Transaction history list  
- Custom hook for state management  
- Unit tests for reliability  

##📂 Repository Structure
```bash
react-finance-dashboard/
├── src/
│   ├── components/
│   │   ├── BalanceCard.jsx
│   │   ├── TransactionForm.jsx
│   │   └── TransactionHistory.jsx
│   ├── pages/
│   │   └── FinanceDashboard.jsx
│   ├── hooks/
│   │   └── useTransactions.js
│   ├── App.jsx
│   └── index.js
├── tests/
│   └── Dashboard.test.js
├── package.json
└── README.md

## ⚡ Quickstart
```bash
git clone https://github.com/aronbariagabr/react-finance-dashboard.git
cd react-finance-dashboard
npm install
npm start

*(Screenshots coming soon — UI preview will be added here)*

## 🖼️ UI Mockup (ASCII Style)
┌───────────────────────────────┐
│       Finance Dashboard       │
├───────────────────────────────┤
│ Balance: $1000.00             │
├───────────────────────────────┤
│ [ Amount: ____ ] [Deposit ▼] │
│ [   Add Transaction Button ] │
├───────────────────────────────┤
│ Transaction History           │
│ • Deposit of $500             │
│ • Withdraw of $200            │
└───────────────────────────────┘

## 🧩 Architectural Box‑Style Diagram (Blackboard Style)

```text
┌───────────────────────────────────────────┐
│               User Interface              │
│   React Components (BalanceCard,          │
│   TransactionForm, TransactionHistory)    │
└───────────────────────────┬───────────────┘
                            │
┌───────────────────────────┴───────────────┐
│          State Management Layer           │
│   Custom Hook (useTransactions)           │
└───────────────────────────┬───────────────┘
                            │
┌───────────────────────────┴───────────────┐
│           Data Flow & Logic               │
│   Balance Updates, Transaction Recording, │
│   History Tracking                        │
└───────────────────────────┬───────────────┘
                            │
┌───────────────────────────┴───────────────┐
│           Presentation Layer              │
│   Updated UI (BalanceCard,                │
│   TransactionHistory)                     │
└───────────────────────────────────────────┘

## 📝 Future Work
- Add charts with Chart.js/Recharts 
- Persistent storage (localStorage/Firebase)  
- Authentication for multi‑user dashboards 
```


## 🏗️ Architecture Diagram (Mermaid)
```mermaid
flowchart TD
    User[User Input] --> Form[TransactionForm]
    Form --> Hook[useTransactions]
    Hook --> Balance[BalanceCard]
    Hook --> History[TransactionHistory]
    Balance --> UI[Updated UI]
    History --> UI

    %% Define six unique color classes
    classDef input fill:#ffcc00,stroke:#333,stroke-width:2px;
    classDef form fill:#00ccff,stroke:#333,stroke-width:2px;
    classDef hook fill:#66ff66,stroke:#333,stroke-width:2px;
    classDef balance fill:#ff9966,stroke:#333,stroke-width:2px;
    classDef history fill:#cc99ff,stroke:#333,stroke-width:2px;
    classDef ui fill:#ff6666,stroke:#333,stroke-width:2px;

    %% Apply classes to each box
    class User input;
    class Form form;
    class Hook hook;
    class Balance balance;
    class History history;
    class UI ui;

