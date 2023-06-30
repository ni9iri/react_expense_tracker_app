import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: e.target.value, enteredAmount: e.target.value}
    // })
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
