import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      date: new Date(2000, 8, 1),
      title: "Item 1",
      amount: 20,
    },
    {
      date: new Date(2001, 5, 4),
      title: "Item 2",
      amount: 50,
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("App.jsx");
    console.log(expense);
  };

  return (
    <>
      <div className="expenses">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
    </>
  );
}

export default App;
