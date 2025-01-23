import React from "react";
import { useBudget } from "../context/BudgetContext";
import { PieChart, Pie, Cell } from "recharts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from "recharts";

const Dashboard = () => {
  const { budget, addExpense } = useBudget();

  const data = [
    { name: "Jan", expenses: 50.9 },
    { name: "Feb", expenses: 300.0010 },
    { name: "Mar", expenses: 100.01 },
    { name: "Apr", expenses: 10.0643 },
    { name: "May", expenses: 200.004 },
    { name: "Jun", expenses: 500.001 },
    { name: "Jul", expenses: 50.0784 },
    { name: "Aug", expenses: 250.023 },
    { name: "Sep", expenses: 150.032 },
    { name: "Oct", expenses: 350.014 },
    { name: "Nov", expenses: 250.079 },
    { name: "Dec", expenses: 450.065 },
  ];
  const datas = [
     { name: "Rent", value: 400 },
      { name: "Groceries", value: 300 },
      { name: "Savings", value: 200 },
     ];
     const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <>
    <div className="dashboard">
      <h2>Budget: ${budget}</h2>

      <button onClick={() => addExpense(50)}>Add Expense $50</button>

      <h3>Monthly Expenses</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="expenses" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div>
      <PieChart width={400} height={400}>
        <Pie
          datas={datas}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
        >
          {datas.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
    </>
  );
};

export default Dashboard;
