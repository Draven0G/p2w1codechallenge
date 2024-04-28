import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  const htmlContent = document.getElementById('root').innerHTML;

 
      // app.js
document.addEventListener('DOMContentLoaded', () => {
  const transactionForm = document.getElementById('transactionForm');
  const searchBar = document.getElementById('searchBar');
  const transactionTableBody = document.getElementById('transactionTableBody');

  let transactions = [];

  // Function to add a new transaction
  const addTransaction = (event) => {
    event.preventDefault();
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = new Date().toISOString();
    const newTransaction = { date, description, amount };
    transactions.push(newTransaction);
    renderTransactions();
    transactionForm.reset();
  };

  // Function to render transactions
  const renderTransactions = () => {
    transactionTableBody.innerHTML = '';
    const filteredTransactions = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchBar.value.toLowerCase())
    );
    filteredTransactions.forEach(transaction => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${transaction.date}</td>
        <td>${transaction.description}</td>
        <td>${transaction.amount}</td>
      `;
      transactionTableBody.appendChild(row);
    });
  };

  // Event listener for form submission
  transactionForm.addEventListener('submit', addTransaction);

  // Event listener for search input
  searchBar.addEventListener('input', renderTransactions);
});

}
  
export default App;