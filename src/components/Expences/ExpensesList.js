import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback"> Record Not Found </h2>;
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expences) => (
                <ExpenseItem
                    key={expences.id}
                    title={expences.title}
                    amount={expences.amount}
                    date={expences.date}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;
