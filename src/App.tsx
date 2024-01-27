import React from "react";
import { DataListContext } from './context/DataListContext'
import AddItem from "./components/AddItem";
import Item from "./components/Item";
import './app.css'

function App() {
  const { todoList, showAddItem, setShowAddItem } = React.useContext(DataListContext);
  
  function handleClick() {
    setShowAddItem(true);
  }

  return (
    <div className="container">
      <h1>Todo List App</h1>
      <button onClick={() => handleClick()}>Add new item</button>
      {showAddItem && <AddItem />}
      <div className="content">
        {todoList && todoList.length
          ? todoList.map((item) => (
              <Item key={item.id} id={item.id} name={item.name} />
            ))
          : null}
      </div>
    </div>
  );
}

export default App
