const initialState = {
  todoList: [
    { id: "1", text: "Task 1", isCompleted: false, isEditable: false },
    { id: "2", text: "Task 2", isCompleted: false, isEditable: false },
    { id: "3", text: "Task 3", isCompleted: false, isEditable: false },
    { id: "4", text: "Task 4", isCompleted: false, isEditable: false },
  ],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TASK":
      return {
        todoList: [...state.todoList, payload],
      };

    case "DELETE_TASK":
      return {
        todoList: state.todoList.filter((element) => element.id !== payload),
      };

    case "COMPLETE_TASK":
      return {
        todoList: state.todoList.map((element) =>
          element.id === payload
            ? { ...element, isCompleted: !element.isCompleted }
            : element
        ),
      };

    case "EDIT_TASK":
      return {
        todoList: state.todoList.map((element) =>
          element.id === payload
            ? { ...element, isEditable: !element.isEditable }
            : element
        ),
      };

    case "UPDATE_TASK":
      return {
        todoList: state.todoList.map((element) =>
          element.id === payload.id
            ? {
                ...element,
                text: payload.text,
                isEditable: !element.isEditable,
              }
            : element
        ),
      };

    default:
      return state;
  }
}
