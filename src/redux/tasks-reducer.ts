import {todolistID1, todolistID2} from "./todolists-reducer.";
import {v1} from "uuid";
import {TASKS_TYPES} from "./tasksAC";
import {CommonTypesAC} from "./store";
import {TODOLISTS_TYPES} from "./todolistAC";

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
    [todolistID2]: [
        {id: v1(), title: 'XXX', isDone: true},
        {id: v1(), title: 'XXXXX', isDone: false},
        {id: v1(), title: 'XXXXXXX', isDone: false},
    ] as TaskType[],
}

export const tasksReducer = (state: TasksType = initialState, action: CommonTypesAC): TasksType => {
    switch (action.type) {
        case TASKS_TYPES.REMOVE_TASK:
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].filter(el => el.id === action.taskId ? '' : el)
            }
        case TASKS_TYPES.ADD_TASK:
            const newTask = {id: action.taskId, title: action.newTitle, isDone: false}
            return {
                ...state,
                [action.todolistId]: [newTask, ...state[action.todolistId]]
            }
        case TASKS_TYPES.CHANGE_STATUS_TASK:
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                  .map(el => el.id === action.taskId ? {...el, isDone: action.checked} : el)
            }
        case TASKS_TYPES.UPDATE_TITLE_TASK:
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                  .map(el => el.id === action.taskId ? {...el, title: action.newTitle} : el)
            }
        case TODOLISTS_TYPES.ADD_TODOLIST:
            return {
                ...state, [action.todoID]: []
            }



        default:
            return state

    }
}