import { useContext, useState } from "react";
import { TodoitemsCon } from "../Store/to-do-store";

function AddtoDo() {
  const { addNewItem } = useContext(TodoitemsCon);
  const [toDoName, settoDoName] = useState();
  const [DueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    settoDoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddNewButton = (event) => {
    event.preventDefault();
    addNewItem(toDoName, DueDate);
    setDueDate("");
    settoDoName("");
  };
  return (
    <form onSubmit={handleAddNewButton}>
      <div className="container ">
        <div className="row ak-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo here"
              value={toDoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" onChange={handleDateChange} />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-outline-success ak-button">
              Add
            </button>
            {/* <button
              type="button"
              className="btn btn-outline-success ak-button"
              onClick={handleAddNewButton}
            >
              Add
            </button> */}
          </div>
        </div>
      </div>
    </form>
  );
}
export default AddtoDo;
