import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          date={props.items[0].date}
          title={props.items[0].title}
          amount={props.items[0].amount}
        />
        <ExpenseItem
          date={props.items[1].date}
          title={props.items[1].title}
          amount={props.items[1].amount}
        />
      </Card>
    </div>
  );
}

export default Expenses;
