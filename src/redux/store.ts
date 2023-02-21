import {combineReducers, createStore} from "redux";
import {todolistsReducer} from "./todolists-reducer.";
import {tasksReducer} from "./tasks-reducer";
import {CommonTasksTypes} from "./tasksAC";
import {CommonTodolistTypes} from "./todolistAC";

export const rootReducer = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer
})

export const store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>

export type CommonTypesAC = CommonTasksTypes | CommonTodolistTypes