import React, {Dispatch} from 'react';
import {Todolist} from "./Todolist";
import {FilterValuesTypes} from "../redux/todolists-reducer.";
import {AppStateType, CommonTypesAC} from "../redux/store";
import {changeFilterAC, updateTitleTodolistAC} from "../redux/todolistAC";
import {addTaskAC, changeStatusAC, removeTaskAC, updateTitleTaskAC} from "../redux/tasksAC";
import {connect, ConnectedProps} from "react-redux";


export const TodolistContainer: React.FC<Props> = props => {
    const {
        todolists,
        tasks,
        removeTask,
        addTask,
        changeFilter,
        updateTitleTodolist,
        changeStatusTask,
        updateTitleTask
    } = props;

    const filteredTasks = (taskFilter: FilterValuesTypes, taskId: string) => {
        switch (taskFilter) {
            case "active":
                return {...tasks, [taskId]: tasks[taskId].filter(el => !el.isDone)}
            case "completed":
                return {...tasks, [taskId]: tasks[taskId].filter(el => el.isDone)}
            default:
                return {...tasks, [taskId]: tasks[taskId]}
        }
    }

    return (
      <>
          {todolists.map(t =>
            <Todolist key={t.id}
                      todolistId={t.id}
                      titleTodolist={t.title}
                      tasks={filteredTasks(t.filter, t.id)}
                      removeTask={removeTask}
                      addTask={addTask}
                      changeFilter={changeFilter}
                      updateTitleTodolist={updateTitleTodolist}
                      changeStatusTask={changeStatusTask}
                      updateTitleTask={updateTitleTask}
            />
          )}
      </>
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        todolists: state.todolists,
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch: Dispatch<CommonTypesAC>) => {
    return {
        changeFilter(todolistId: string, filterValue: FilterValuesTypes) {
            dispatch(changeFilterAC(todolistId, filterValue))
        },
        updateTitleTodolist(todolistId: string, newTitle: string) {
            dispatch(updateTitleTodolistAC(todolistId, newTitle))
        },
        removeTask(todolistId: string, taskId: string) {
            dispatch(removeTaskAC(todolistId, taskId))
        },
        addTask(todolistId: string, newTitleText: string) {
            dispatch(addTaskAC(todolistId, newTitleText))
        },
        changeStatusTask(todolistId: string, taskId: string, checked: boolean) {
            dispatch(changeStatusAC(todolistId, taskId, checked))
        },
        updateTitleTask(todolistId: string, taskId: string, newTitle: string) {
            dispatch(updateTitleTaskAC(todolistId, taskId, newTitle))
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(TodolistContainer)

type Props = ConnectedProps<typeof connector>;
export type MapStatePropsType = ReturnType<typeof mapStateToProps>
export type MapDispatchPropsType = ReturnType<typeof mapDispatchToProps>