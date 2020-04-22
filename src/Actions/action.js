export const addTask = (payload) => {
    return {
        type: "ADD_TASK",
        payload
    }
}

export const deleteTask = (payload) => {
    return {
        type: "DELETE_TASK",
        payload
    }
}

export const completeTask = (payload) => {
    return {
        type: "COMPLETE_TASK",
        payload
    }
}

export const editTask = (payload) => {
    return {
        type: "EDIT_TASK",
        payload
    }
}

export const updateTask = (payload) => {
    return {
        type: "UPDATE_TASK",
        payload
    }
}