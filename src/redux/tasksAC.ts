import {v1} from "uuid";

export enum TASKS_TYPES {
    ADD_TASK = 'ADD-TASK',
    REMOVE_TASK = 'REMOVE-TASK',
    CHANGE_STATUS_TASK = 'CHANGE-STATUS-TASK',
    UPDATE_TITLE_TASK = 'UPDATE-TITLE-TASK'
}


export type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (todolistId: string, newTitle: string) => {
    return {
        type: TASKS_TYPES.ADD_TASK,
        todolistId,
        taskId: v1(),
        newTitle
    } as const
}

export type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (todolistId: string, taskId: string) => {
    return {
        type: TASKS_TYPES.REMOVE_TASK,
        todolistId,
        taskId,
    } as const
}

export type changeStatusACType = ReturnType<typeof changeStatusAC>
export const changeStatusAC = (todolistId: string, taskId: string, checked: boolean) => {
    return {
        type: TASKS_TYPES.CHANGE_STATUS_TASK,
        todolistId,
        taskId,
        checked
    } as const
}

export type updateTitleTaskACType = ReturnType<typeof updateTitleTaskAC>
export const updateTitleTaskAC = (todolistId: string, taskId: string, newTitle: string) => {
    return {
        type: TASKS_TYPES.UPDATE_TITLE_TASK,
        todolistId,
        taskId,
        newTitle
    } as const
}


export type CommonTasksTypes = addTaskACType
  | removeTaskACType
  | changeStatusACType
  | updateTitleTaskACType
