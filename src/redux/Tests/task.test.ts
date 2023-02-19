import {v1} from "uuid";
import {tasksReducer, TasksType, TaskType} from "../tasks-reducer";
import {addTaskAC, removeTaskAC} from "../tasksAC";


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