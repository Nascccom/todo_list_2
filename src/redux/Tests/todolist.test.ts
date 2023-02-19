import {addTodolistAC, changeFilterAC, removeTodolistAC, updateTitleTodolistAC} from "../todolistAC";
import {todolistsReducer, TodolistsType} from "../todolists-reducer.";

test('correct removed todolist', () => {
    const startState: TodolistsType = [
        {id: '1', title: 'SQL', filter: 'active'},
        {id: '2', title: 'English', filter: 'all'},
        {id: '3', title: 'HW', filter: 'completed'}
    ]

    const action = removeTodolistAC('2')
    const endState: TodolistsType = todolistsReducer(startState, action)

    expect(endState.length).toBe(2)
    expect(endState[0].id).toBe('1')
    expect(endState[1].id).toBe('3')
})

test('correct add todolist', () => {
    const startState: TodolistsType = [
        {id: '1', title: 'SQL', filter: 'active'},
        {id: '2', title: 'English', filter: 'all'},
        {id: '3', title: 'HW', filter: 'completed'}
    ]
    const newTitle = 'Happy'
    const action = addTodolistAC(newTitle)
    const endState: TodolistsType = todolistsReducer(startState, action)

    expect(endState.length).toBe(4)
    expect(endState[0].id).toBe('1')
    expect(endState[1].id).toBe('2')
    expect(endState[2].id).toBe('3')
    expect(endState[3].title).toBe(newTitle)
})

test('correct update todolists title', () => {
    const startState: TodolistsType = [
        {id: '1', title: 'SQL', filter: 'active'},
        {id: '2', title: 'English', filter: 'all'},
    ]

    const newTitle = 'React'
    const action = updateTitleTodolistAC('2', newTitle)
    const endState: TodolistsType = todolistsReducer(startState, action)

    expect(endState.length).toBe(2)
    expect(endState[0].id).toBe('1')
    expect(endState[1].id).toBe('2')
    expect(endState[0].title).toBe('SQL')
    expect(endState[1].title).toBe('React')
})

test('correct should be changed filter', () => {
    const startState: TodolistsType = [
        {id: '1', title: 'SQL', filter: 'active'},
        {id: '2', title: 'English', filter: 'all'},
    ]
    const newFilter = 'completed'
    const action = changeFilterAC('2', newFilter)
    const endState: TodolistsType = todolistsReducer(startState, action)

    expect(endState.length).toBe(2)
    expect(endState[0].id).toBe('1')
    expect(endState[1].id).toBe('2')
    expect(endState[0].filter).toBe('active')
    expect(endState[1].filter).toBe('completed')
})




