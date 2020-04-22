import React, { useState } from "react";
import { connect } from "react-redux";

import {
  deleteTask,
  completeTask,
  editTask,
  updateTask,
} from "../Actions/action";

import "./TodoList.css";

function TodoList(props) {
  const [updateditem, setUpdateditem] = useState("");

  return (
    <div className="display-tasks">
      <h2>Let's get some work done!</h2>
      <hr />
      <ul className="tasks-list">
        {props.List.map((element) => (
          <div key={element.id}>
            {element.isEditable ? (
              <div>
                <input
                  type="text"
                  value={updateditem}
                  className="updated-task task-button"
                  onChange={(event) => setUpdateditem(event.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-dark task-button"
                  onClick={() =>
                    props.updateTask({
                      id: element.id,
                      text: updateditem,
                    })
                  }
                >
                  Update
                </button>
              </div>
            ) : (
              <li key={element.id}>
                <button
                  type="button"
                  className={`${
                    element.isCompleted
                      ? "btn btn-primary task-button"
                      : "btn btn-light task-button"
                  }`}
                  onClick={() => props.completeTask(element.id)}
                >
                  {element.isCompleted ? "Undo" : "Complete"}
                </button>
                <button
                  type="button"
                  className="btn btn-danger task-button"
                  onClick={() => props.deleteTask(element.id)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-success task-button"
                  onClick={() => {
                    props.editTask(element.id);
                    setUpdateditem(element.text);
                  }}
                >
                  Edit
                </button>
                <span
                  className={`task ${element.isCompleted && "completed-task"}`}
                >
                  {element.text}
                </span>
              </li>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  List: state.todoList,
});

const mapDispatchToProps = (Dispatch) => {
  return {
    deleteTask: (payload) => Dispatch(deleteTask(payload)),
    completeTask: (payload) => Dispatch(completeTask(payload)),
    editTask: (payload) => Dispatch(editTask(payload)),
    updateTask: (payload) => Dispatch(updateTask(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);