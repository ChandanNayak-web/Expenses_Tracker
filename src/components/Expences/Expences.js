import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpencesChart from "./ExpencesChart";
import Card from "../UI/Card";
import "./Expences.css";

const Expences = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //  condition using a variable
  // let expencesContent = <p>No Record Found</p>;

  // if (filteredExpenses.length > 0) {
  //   expencesContent = filteredExpenses.map((expences) => (
  //     <ExpenseItem
  //       key={expences.id}
  //       title={expences.title}
  //       amount={expences.amount}
  //       date={expences.date}
  //     />
  //   ));
  // }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpencesChart expence={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />

      {/** call the expences dynamically from app.js using map */}
      {/* {props.items.map((expences) => (
        <ExpenseItem
          key={expences.id}
          title={expences.title}
          amount={expences.amount}
          date={expences.date}
        />
      ))} */}

      {/** filter the expences dynamically from app.js using map */}
      {/** using turnary operator */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No Record Found</p>
      ) : (
        filteredExpenses.map((expences) => (
          <ExpenseItem
            key={expences.id}
            title={expences.title}
            amount={expences.amount}
            date={expences.date}
          />
        ))
      )} */}

      {/** using && contional operator */}
      {/* {filteredExpenses.length === 0 && <p>No Record Found</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((expences) => (
        <ExpenseItem
          key={expences.id}
          title={expences.title}
          amount={expences.amount}
          date={expences.date}
        />
      ))} */}

      {/** condition using a variable */}
      {/* {expencesContent} */}

      {/** statically call the expences from app.ld */}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
};

export default Expences;
