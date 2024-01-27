import React from 'react';
import { ItemProps } from '../../typings/index.ds';
import { DataListContext } from '../../context/DataListContext';
import "./item.css";

const Item = ({ id, name }: ItemProps) => {
  const { todoList, removeItemFromList, editItemInList } = React.useContext(DataListContext);
  const [ newName, setNewName ] = React.useState(name)
  const [ toEdit, setToEdit ] = React.useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const target = e.target as HTMLButtonElement;

    if (!target) return;

    const classList = target.classList;
    const idItem = target.id;
    const isDelete = classList.contains("item-delete");
    const isToEdit = classList.contains("item-to-edit");
    const isEdit = classList.contains("item-edit");

    if (!todoList?.length) return;

    isToEdit
      && (editItemInList(todoList, idItem, newName), setToEdit(false))

    isDelete
      && removeItemFromList(todoList, idItem)

    isEdit && setToEdit(true)

    console.log("class list", isToEdit);
  };

  return id && name ? (
    <div className="item">
      {toEdit ? (
        <div className="item-group-edit">
          <input type="text" name="" id="" value={newName} onChange={(e) => setNewName(e.target.value)} autoFocus />
          <button
            onClick={handleClick}
            className="item-button item-to-edit"
            id={id}
          >
            to edit
          </button>
        </div>
      ) : (
        <>
          <div className="item-group">
            <input type="checkbox" id={id} />
            <label htmlFor={id}>{name}</label>
          </div>

          <div className="item-group-button">
            <button
              onClick={handleClick}
              className="item-button item-edit"
              id={id}
            >
              edit
            </button>
            <button
              onClick={handleClick}
              className="item-button item-delete"
              id={id}
            >
              x
            </button>
          </div>
        </>
      )}
    </div>
  ) : null;
};

export default Item