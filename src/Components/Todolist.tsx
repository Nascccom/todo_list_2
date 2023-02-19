import React, {useRef} from 'react';
import {TodolistPropsType} from "../App";
import {FilterValuesTypes} from "../redux/todolists-reducer.";

export const Todolist = (props: TodolistPropsType) => {
    const newTaskTitle = useRef<HTMLInputElement>(null)

    const onChangeFilterValue = (filterValue: FilterValuesTypes) => {
        props.changeFilter(props.todolistId, filterValue)
    }

    const onRemoveTask = (taskId: string) => {
        props.removeTask(props.todolistId, taskId)
    }

    const onAddTask = () => {
        // console.log(newTaskTitle.current)
        // if (newTaskTitle.current !== null) {
        //     props.addTask(props.todolistId, newTaskTitle.current.value)
        // }
    }

    return (
      <div>
          <h3>{}</h3>
          <div>
              <input ref={newTaskTitle}/>
              <button onChange={onAddTask}>Add</button>
          </div>
          <ul>
              {props.tasks[props.todolistId].map((el) => {
                  return (
                    <li key={el.id}>
                        <input type="checkbox" onChange={onAddTask}/>
                        <span>{el.title}</span>
                        <button onClick={() => onRemoveTask(el.id)}>X</button>
                    </li>
                  )
              })}
          </ul>
          <div>
              <button onClick={() => onChangeFilterValue('all')}>All</button>
              <button onClick={() => onChangeFilterValue('active')}>Active</button>
              <button onClick={() => onChangeFilterValue('completed')}>Completed</button>
          </div>
      </div>
    );
};
