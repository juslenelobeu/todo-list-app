import React from 'react'
import { v4 as uuidv4 } from "uuid";
import { DataListContext } from '../../context/DataListContext';
import { ItemProps } from '../../typings/index.ds'
import './add-item.css'

const AddItem = () => {
  const { setTodoList, setShowAddItem } = React.useContext(DataListContext);
  const [ nameItem, setNameItem ] = React.useState("");

  function addNewItem(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      name: nameItem,
    };

    setNameItem("");
    return nameItem.trim() !== '' ? setTodoList((prevData: ItemProps[] | null) => {
      return [...(prevData ?? []), newItem];
    }) : null;
  }

  function handleClick() {
    setShowAddItem(false);
  }

  return (
    <form className="container-add-item" onSubmit={addNewItem}>
      <input
        type="text"
        name=""
        id=""
        value={nameItem}
        onChange={(e) => setNameItem(e.target.value)}
        autoFocus
      />
      <button type="submit">Add</button>
      <button onClick={handleClick}>Cancel</button>
    </form>
  );
};

export default AddItem