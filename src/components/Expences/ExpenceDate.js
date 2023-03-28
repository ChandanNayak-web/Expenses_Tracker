import React from 'react'
import "./ExpenceDate.css";

const ExpenceDate = (props) => {
  const Month = props.date.toLocaleString("en-us", { month: "long" });
  const Day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const Year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{Month}</div>
      <div className="expense-date__day">{Day}</div>
      <div className="expense-date__year">{Year}</div>
    </div>
  );
};

export default ExpenceDate;
