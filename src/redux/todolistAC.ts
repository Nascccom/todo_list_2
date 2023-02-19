import {v1} from "uuid";
import {FilterValuesTypes} from "./todolists-reducer.";

export enum TODOLISTS_TYPES {
    REMOVE_TODOLIST = 'REMOVE-TODOLIST',
    ADD_TODOLIST = 'ADD-TODOLIST',
    UPDATE_TITLE_TODOLIST = 'UPDATE-TITLE-TODOLIST',
    CHANGE_FILTER = 'CHANGE_FILTER'
}

export type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todoID: string) => {
    return {
        type: TODOLISTS_TYPES.REMOVE_TODOLIST,
        todoID
    } as const
}

export type AddTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string) => {
    return {
        type: TODOLISTS_TYPES.ADD_TODOLIST,
        todoID: v1(),
        title
    } as const
}

export type UpdateTitleTodolistACType = ReturnType<typeof updateTitleTodolistAC>
export const updateTitleTodolistAC = (todoID: string, title: string) => {
    return {
        type: TODOLISTS_TYPES.UPDATE_TITLE_TODOLIST,
        todoID,
        title
    } as const
}

export type ChangeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (todoID: string, filterValue: FilterValuesTypes) => {
    return {
        type: TODOLISTS_TYPES.CHANGE_FILTER,
        todoID,
        filterValue
    } as const
}


export type CommonTodolistTypes = RemoveTodolistACType
  | AddTodolistACType
  | UpdateTitleTodolistACType
  | ChangeFilterACType
