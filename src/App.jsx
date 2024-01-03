import AddtoDo from "./Components/AddToDo";
import AppName from "./Components/AppName";
import "./App.css";
import ToDoItems from "./Components/ToDoItems";
import { TodoitemsCon } from "./Store/to-do-store";
import { useReducer } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";

import NoPage from "./Components/NoPage";

const todoItemReducer = (currToDoItem, action) => {
  let newToDoNewItems = currToDoItem;
  if (action.type === "NEW_ITEM") {
    newToDoNewItems = [
      ...currToDoItem,
      { name: action.payload.itemName, dueDate: action.payload.itemDuedate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newToDoNewItems = currToDoItem.filter(
      (item) => item.name !== action.payload.itemName
    );
  }

  return newToDoNewItems;
};

function App() {
  // const [todoItems, settodoItems] = useState([]);

  const [todoItems, dispachToDoItems] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDuedate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDuedate,
      },
    };
    dispachToDoItems(newItemAction);
  };

  const deleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispachToDoItems(deleteItemAction);
  };

  return (
    <TodoitemsCon.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <center className="todo-container">
        <div>
          <AppName />
          <div className="items-container">
            <AddtoDo />
            <ToDoItems></ToDoItems>
          </div>
        </div>
      </center>
    </TodoitemsCon.Provider>
  );
}

export default App;
