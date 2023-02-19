import React, {Dispatch} from 'react';
import './App.css';
import {connect, ConnectedProps} from "react-redux";
import {Todolist} from "./Components/Todolist";
import {AppStateType, CommonTypesAC} from "./redux/store";
import {FilterValuesTypes, todolistID1, TodolistType} from "./redux/todolists-reducer.";
import {TasksType} from "./redux/tasks-reducer";
import {addTaskAC, removeTaskAC} from "./redux/tasksAC";
import {changeFilterAC} from "./redux/todolistAC";


export const App: React.FC<TProps> = props => {

    const {
        todolistId,
        todolist,
        tasks,
        removeTask,
        addTask,
        changeFilter
    } = props;

    return (
      <Todolist todolistId={todolistId}
                todolist={todolist}
                tasks={tasks}
                removeTask={removeTask}
                addTask={addTask}
                changeFilter={changeFilter}
      />
    );
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        todolistId: todolistID1,
        todolist: state.todolists,
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch: Dispatch<CommonTypesAC>): MapDispatchPropsType => {
    return {
        changeFilter(todolistId: string, filterValue: FilterValuesTypes) {
            dispatch(changeFilterAC(todolistId, filterValue))
        },
        removeTask(todolistId: string, taskId: string) {
            dispatch(removeTaskAC(todolistId, taskId))
        },
        addTask(todolistId: string, newTitleText: string) {
            dispatch(addTaskAC(todolistId, newTitleText))
        },


    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(App)


export type TProps = ConnectedProps<typeof connector>;

type MapStatePropsType = {
    todolistId: string;
    todolist: TodolistType[],
    tasks: TasksType
}

type MapDispatchPropsType = {
    changeFilter: (todolistId: string, filterValue: FilterValuesTypes) => void
    removeTask: (todolistId: string, taskId: string) => void
    addTask: (todolistId: string, newTitleText: string) => void
}

export type TodolistPropsType = MapStatePropsType & MapDispatchPropsType