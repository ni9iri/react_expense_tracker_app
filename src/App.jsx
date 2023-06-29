import Expenses from "./components/Expenses";

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

  return (
    <>
      <h1>Hello</h1>
      <div className="expenses">
        <Expenses items={expenses} />
      </div>
    </>
  );
}

export default App;
