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

## 🏗️ Architecture Diagram (Mermaid)
flowchart TD
    User[User Input] --> Form[TransactionForm]
    Form --> Hook[useTransactions]
    Hook --> Balance[BalanceCard]
    Hook --> History[TransactionHistory]
    Balance --> UI[Updated UI]
    History --> UI
    ## 🖼️ Screenshots
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

## 🏗️ Wireframe Diagram (Mermaid)
```mermaid
graph TD
  A[Dashboard UI] --> B[BalanceCard]
  A --> C[TransactionForm]
  A --> D[TransactionHistory]


## 📝 Future Work
- Add charts with Chart.js/Recharts  
- Persistent storage (localStorage/Firebase)  
- Authentication for multi‑user dashboards  

## 📫 Contact

## 📫 Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Aron%20Bariagabr-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/aron-ukbay-bariagabr-5551a8391/)
[![GitHub](https://img.shields.io/badge/GitHub-aronbariagabr-black?style=flat&logo=github)](https://github.com/aronbariagabr)
[![Email](https://img.shields.io/badge/Email-bariagabra%40gmail.com-red?style=flat&logo=gmail)](mailto:bariagabra@gmail.com)




