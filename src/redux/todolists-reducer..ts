import {v1} from "uuid";
import {TODOLISTS_TYPES} from "./todolistAC";
import {CommonTypesAC} from "./store";

export type FilterValuesTypes = 'active' | 'all' | 'completed'
export type TodolistType = {
    id: string,
    title: string,
    filter: FilterValuesTypes
}
export type TodolistsType = TodolistType[]

export const todolistID1 = v1();
export const todolistID2 = v1();

const initialState: TodolistsType = [
    {id: todolistID1, title: 'SQL', filter: 'all'},
    {id: todolistID2, title: 'English', filter: 'all'},
]

export const todolistsReducer = (state: TodolistsType = initialState, action: CommonTypesAC): TodolistsType => {
    switch (action.type) {
        case TODOLISTS_TYPES.ADD_TODOLIST:
            return [
                ...state, {id: action.todoID, title: action.title, filter: 'all'}
            ]
        case TODOLISTS_TYPES.REMOVE_TODOLIST:
            return state.filter(el => el.id !== action.todoID ? el: '')
        case TODOLISTS_TYPES.UPDATE_TITLE_TODOLIST:
            return state.map(el => el.id === action.todoID ? {...el, title: action.title} : el)
        case TODOLISTS_TYPES.CHANGE_FILTER:
            return state.map(el => el.id === action.todoID ? {...el, filter: action.filterValue} : el)
        default:
            return state
    }
}