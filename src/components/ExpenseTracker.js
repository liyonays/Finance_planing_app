import { useState } from "react";

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({ type: '', amount: '' });

  const handleAddTransaction = () => {
    setTransactions([...transactions, form]);
    setForm({ type: '', amount: '' });
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <input
        type="text"
        placeholder="Type"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />
      <button onClick={handleAddTransaction}>Add</button>
      <ul>
        {transactions.map((t, index) => (
          <li key={index}>
            {t.type}: ${t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
