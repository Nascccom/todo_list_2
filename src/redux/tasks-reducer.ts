import {todolistID1} from "./todolists-reducer.";
import {v1} from "uuid";
import {CommonTasksTypes} from "./tasksAC";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TasksType = {
    [key: string]: TaskType[]
}
const initialState = {
    [todolistID1]: [
        {id: v1(), title: 'SSS', isDone: true},
        {id: v1(), title: 'SSSSS', isDone: false},
        {id: v1(), title: 'SSSSSSSS', isDone: true},
    ] as TaskType[],
    // [todolistID2]: [
    //     {id: v1(), title: 'XXX', isDone: true},
    //     {id: v1(), title: 'XXXXX', isDone: false},
    //     {id: v1(), title: 'XXXXXXX', isDone: false},
    // ] as TaskType[],
}

export const tasksReducer = (state: TasksType = initialState, action: CommonTasksTypes): TasksType => {
    switch (action.type) {
        case "REMOVE-TASK":
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].filter(el => el.id === action.taskId ? '' : el)
            }
        case "ADD-TASK":
            const newTask = {id: action.taskId, title: action.newTitle, isDone: false}
            return {
                ...state,
                [action.todolistId]: [newTask,...state[action.todolistId]]
            }
        default:
            return state

    }
}