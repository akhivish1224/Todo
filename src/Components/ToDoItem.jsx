import { useContext } from "react";
import { TodoitemsCon } from "../Store/to-do-store";

function ToDoItem({ toDoName, toDoDate }) {
  const { deleteItem } = useContext(TodoitemsCon);

  return (
    <div className="container ">
      <div className="row ak-row">
        <div className="col-6">{toDoName}</div>
        <div className="col-4">{toDoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger ak-button"
            onClick={() => deleteItem(toDoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem;
