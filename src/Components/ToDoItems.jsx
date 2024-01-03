import { useContext } from "react";
import { TodoitemsCon } from "../Store/to-do-store";
import ToDoItem from "./ToDoItem";
const ToDoItems = () => {
  const conObj = useContext(TodoitemsCon);
  const todoItems = conObj.todoItems;
  //console.log(useContextFromContex);

  return (
    <div>
      {todoItems.map((item) => (
        <ToDoItem toDoName={item.name} toDoDate={item.DueDate}></ToDoItem>
      ))}
    </div>
  );
};
export default ToDoItems;
