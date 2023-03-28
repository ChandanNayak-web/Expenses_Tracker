import React, { useState } from "react";
import "./App.css";
import Expences from "./components/Expences/Expences";
import NewExpencense from "./components/NewExpences/NewExpences";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 1),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 9, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expences, setExpences] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpences((prevExpences) => {
      return [expense, ...prevExpences]; //expense come from newexpense.js
    });
  };

  return (
    <>
      <NewExpencense onAddExpense={addExpenseHandler} />{" "}
      {/** passing addExpenseHandler function to newexpe.js to get the value*/}
      <Expences items={expences} />
    </>
  );
}

export default App;
