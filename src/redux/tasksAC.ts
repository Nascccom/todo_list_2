import {v1} from "uuid";

const ADD_TASK = 'ADD-TASK'
const REMOVE_TASK = 'REMOVE-TASK'

export type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (todolistId: string, newTitle: string) => {
    return {
        type: ADD_TASK,
        todolistId,
        taskId: v1(),
        newTitle
    } as const
}

export type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (todolistId: string, taskId: string) => {
    return {
        type: REMOVE_TASK,
        todolistId,
        taskId,
    } as const
}


export type CommonTasksTypes = addTaskACType | removeTaskACType

