import {v1} from "uuid";
import {tasksReducer, TasksType, TaskType} from "../tasks-reducer";
import {addTaskAC, changeStatusAC, removeTaskAC, updateTitleTaskAC} from "../tasksAC";
import {addTodolistAC} from "../todolistAC";


test('correct should be add task', () => {
    const startState: TasksType = {
        ['todolistID1']: [
            {id: v1(), title: 'SSS', isDone: true},
            {id: v1(), title: 'SSSSS', isDone: false},
        ] as TaskType[],
        ['todolistID2']: [
            {id: v1(), title: 'XXX', isDone: true},
            {id: v1(), title: 'XXXXX', isDone: false},
            {id: v1(), title: 'XXXXXXX', isDone: false},
        ] as TaskType[],
    }


    const newTitle = 'Hello, Marry Poppins'
    const action = addTaskAC('todolistID2', newTitle)
    const endState: TasksType = tasksReducer(startState, action)

    expect(endState['todolistID1'].length).toBe(2)
    expect(endState['todolistID2'].length).toBe(4)
    expect(endState['todolistID2'][0].title).toBe('Hello, Marry Poppins')
})
test('correct should be removed task', () => {
    const startState: TasksType = {
        ['todolistID1']: [
            {id: '1', title: 'SSS', isDone: true},
            {id: '2', title: 'SSSSS', isDone: false},
        ] as TaskType[],
        ['todolistID2']: [
            {id: '3', title: 'XXX', isDone: true},
            {id: '4', title: 'XXXXX', isDone: false},
            {id: '5', title: 'XXXXXXX', isDone: false},
        ] as TaskType[],
    }

    const action = removeTaskAC('todolistID2', '4')
    const endState: TasksType = tasksReducer(startState, action)

    expect(endState['todolistID1'].length).toBe(2)
    expect(endState['todolistID2'].length).toBe(2)
    expect(endState['todolistID2'][0].id).toBe('3')
    expect(endState['todolistID2'][1].id).toBe('5')
    expect(endState['todolistID2'][1].title).toBe('XXXXXXX')
})
test('correct should be changed status task', () => {
    const startState: TasksType = {
        ['todolistID1']: [
            {id: '1', title: 'SSS', isDone: true},
            {id: '2', title: 'SSSSS', isDone: false},
        ] as TaskType[],
        ['todolistID2']: [
            {id: '3', title: 'XXX', isDone: true},
            {id: '4', title: 'XXXXX', isDone: false},
        ] as TaskType[],
    }

    const action = changeStatusAC('todolistID1', '1', false)
    const endState: TasksType = tasksReducer(startState, action)

    expect(endState['todolistID1'].length).toBe(2)
    expect(endState['todolistID2'].length).toBe(2)
    expect(endState['todolistID1'][0].id).toBe('1')
    expect(endState['todolistID1'][1].id).toBe('2')
    expect(endState['todolistID1'][0].isDone).toBe(false)
    expect(endState['todolistID1'][1].isDone).toBe(false)

})
test('correct should be update title task', () => {
    const startState: TasksType = {
        ['todolistID1']: [
            {id: '1', title: 'SSS', isDone: true},
            {id: '2', title: 'SSSSS', isDone: false},
        ] as TaskType[],
        ['todolistID2']: [
            {id: '3', title: 'XXX', isDone: true},
            {id: '4', title: 'XXXXX', isDone: false},
        ] as TaskType[],
    }
    const newTitle = 'I want to eat'

    const action = updateTitleTaskAC('todolistID2', '4', newTitle)
    const endState: TasksType = tasksReducer(startState, action)

    expect(endState['todolistID1'].length).toBe(2)
    expect(endState['todolistID2'].length).toBe(2)
    expect(endState['todolistID1'][0].title).toBe('SSS')
    expect(endState['todolistID1'][1].title).toBe('SSSSS')
    expect(endState['todolistID2'][0].title).toBe('XXX')
    expect(endState['todolistID2'][1].title).toBe(newTitle)

})

test('correct should add task when added new todolist', () => {
    const startState: TasksType = {
        'todolist1': [
            {id: '1', title: 'HTML', isDone: true},
            {id: '2', title: 'Css', isDone: true},
            {id: '3', title: 'React', isDone: false}
        ],
        'todolist2': [
            {id: '1', title: 'HTML', isDone: true},
            {id: '2', title: 'SQL', isDone: false},
            {id: '3', title: 'React Native', isDone: false}
        ]
    }

    const action = addTodolistAC("Example")
    const endState: TasksType = tasksReducer(startState, action)

    const keys = Object.keys(endState)
    const newKey = keys.find(k => k !== 'todolist1' && k !=='todolist2')
    if (!newKey) {
        throw Error('new key should be added')
    }

    expect(keys.length).toBe(3)
    expect(endState[newKey]).toEqual([])
})