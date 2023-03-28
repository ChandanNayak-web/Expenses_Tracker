import React, { useState } from "react";
import "./NewExpences.css";
import ExpencesForm from "./ExpencesForm";

const NewExpencense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const savaExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // we salocopy allthe expenseData value from expenseform.js file
      id: Math.random().toString(), // added new id to each objects for unique identification
    };
    //   console.log("expenseData", expenseData);
    props.onAddExpense(expenseData); // passing expenseData from newexpences.js to app.js
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expences</button>
      )}
      {isEditing && (
        <ExpencesForm
          onSavaExpenseData={
            savaExpenseDataHandler
          } /** passing savaExpenseDataHandler function to expenseform.js to get the value*/
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpencense;
