import React from 'react';
import {FilterValuesTypes} from "../redux/todolists-reducer.";
import {TasksType} from "../redux/tasks-reducer";
import style from './Todolist.module.css'
import {EditSpan} from "./EditSpan/EditSpan";
import {Button} from "./Button/Button";
import {AddingAnElement} from "./AddingElement/AddingElement";
import {MapDispatchPropsType} from "./TodolistContainer";

type TodolistPropsType = MapDispatchPropsType & {
    tasks: TasksType
    todolistId: string
    titleTodolist: string
}

export const Todolist: React.FC<TodolistPropsType> = props => {
    const {
        tasks,
        todolistId,
        titleTodolist,
        removeTask,
        addTask,
        changeFilter,
        changeStatusTask,
        updateTitleTask,
        updateTitleTodolist
    } = props;

    const onChangeFilterValue = (filterValue: FilterValuesTypes) => {
        changeFilter(todolistId, filterValue)
    }

    const onRemoveTask = (taskId: string) => {
        removeTask(todolistId, taskId)
    }

    const onAddTask = (newTitle: string) => {
        addTask(todolistId, newTitle)
    }

    const onChangeStatus = (taskId: string, checked: boolean) => {
        changeStatusTask(todolistId, taskId, checked)
    }

    const onUpdateTodolistTitle = (newTitle: string) => {
        updateTitleTodolist(todolistId, newTitle)
    }

    const mappedTask = tasks[todolistId].map((el) => {
        const onUpdateTitleTask = (newTitle: string) => {
            updateTitleTask(todolistId, el.id, newTitle)
        }
        return (
          <li key={el.id}>
              <input type="checkbox"
                     checked={el.isDone}
                     onChange={(e) => onChangeStatus(el.id, e.currentTarget.checked)}
              />
              <EditSpan title={el.title}
                        callBack={onUpdateTitleTask}
              />
              <Button nameButton={'X'} callBack={() => onRemoveTask(el.id)}/>
          </li>
        )
    })

    return (
      <div>
          <EditSpan title={titleTodolist}
                    style={style.title}
                    callBack={onUpdateTodolistTitle}
          />
          <div>
              <AddingAnElement addItem={onAddTask}/>
          </div>
          <ul>
              {mappedTask}
          </ul>
              <Button nameButton={'All'} callBack={() => onChangeFilterValue('all')}/>
              <Button nameButton={'Active'} callBack={() => onChangeFilterValue('active')}/>
              <Button nameButton={'Completed'} callBack={() => onChangeFilterValue('completed')}/>
      </div>
    );
};
