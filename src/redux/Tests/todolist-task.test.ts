import {tasksReducer, TasksType} from "../tasks-reducer";
import {addTodolistAC} from "../todolistAC";
import {todolistsReducer, TodolistsType} from "../todolists-reducer.";

test('id should be equal', () => {
    const startTodoState: TodolistsType = []

    const startTasksState: TasksType = {}


    const action = addTodolistAC('AAAA')

    const endTodoState = todolistsReducer(startTodoState, action)
    const endTasksState = tasksReducer(startTasksState, action)

    const keys = Object.keys(endTasksState)
    const idTask = keys[0]


    expect(endTodoState.length).toBe(1)
    expect(endTodoState[0].id).toEqual(idTask)
})