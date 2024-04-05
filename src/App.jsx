import { useState } from "react";
import ExpensList from "./Features/ExpensList";
import ExpensFilter from "./Features/ExpensFilter";
import  ExpensFrom  from "./Features/ExpensFrom";

const App = () => {
  const [expense, setExpense] = useState([
    {id:1,category:"Krishna", description:"Life",amount:" 00000"}
  ]);


////////////////////////////////////////////////////////////

// deleting items
  const deleteitems = (id) => {
    setExpense(expense.filter((item) => item.id !== id));
  };

// filtering items
  const filterItems = (category) => {
    const filteredExpense = expense.filter(
      (item) => item.category === category
    );
    setExpense(filteredExpense);
  };

  // adding items
  const Additem = (data) =>{
    setExpense([...expense,data])
  }
///////////////////////////////////////////////////////////////
  return (
   
    <main className="">
    <ExpensFilter filter={filterItems} /> 
    <ExpensFrom Add={Additem} /> 
    <ExpensList items={expense} 
    deleteitems={deleteitems} />
    </main>
   
  );
};

export default App;
