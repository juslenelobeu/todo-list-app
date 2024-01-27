import React from "react";
import { ItemProps } from "../typings/index.ds";

export type DataContextProps = {
  todoList: ItemProps[] | null;
  setTodoList: React.Dispatch<React.SetStateAction<ItemProps[] | null | null>>;
  showAddItem: boolean;
  setShowAddItem: React.Dispatch<React.SetStateAction<boolean>>;
  removeItemFromList: (listProps: ItemProps[], itemId: string) => ItemProps[];
  editItemInList: (
    listProps: ItemProps[],
    itemId: string,
    newName: string
  ) => ItemProps[];
};

export const DataListContext = React.createContext<DataContextProps>(
  {} as DataContextProps
);

export const DataListProvider = ({ children }: { children: React.ReactNode }) => {
  const [todoList, setTodoList] = React.useState<ItemProps[] | null>(null);
  const [showAddItem, setShowAddItem] = React.useState(false);

  function removeItemFromList (itenList: ItemProps[], itemId: string): ItemProps[] {
    const updatedList = itenList.filter((item) => item.id !== itemId);
    
    setTodoList(updatedList)

    return {
      ...updatedList,
    };
  }

  function editItemInList (itenList: ItemProps[], itemId: string, newName: string): ItemProps[] {
    console.log(itenList, itemId, newName)
    const updatedList = itenList.map(item => {
      if (item.id === itemId) {
        return { ...item, name: newName };
      }
      return item;
    });

    setTodoList(updatedList);

    return {
      ...updatedList,
    };
  }

  return (
    <DataListContext.Provider
      value={{
        showAddItem, 
        setShowAddItem,
        todoList, 
        setTodoList,
        removeItemFromList ,
        editItemInList,
      }}
    >
      {children}
    </DataListContext.Provider>
  );
}