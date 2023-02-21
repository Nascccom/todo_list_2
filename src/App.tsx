import React, {Dispatch} from 'react';
import './App.css';
import {connect, ConnectedProps} from "react-redux";
import {AppStateType, CommonTypesAC} from "./redux/store";
import {addTodolistAC} from "./redux/todolistAC";
import {AddingAnElement} from "./Components/AddingElement/AddingElement";
import TodolistContainer from "./Components/TodolistContainer";



export const App: React.FC<TProps> = props => {
    const onAddTodolist = (newTitle: string) => {
        props.addTodolist(newTitle)
    }

    return (
      <div className={'App'}>
          <AddingAnElement addItem={onAddTodolist}/>
          <TodolistContainer/>
      </div>
    );
}


const mapStateToProps = (state: AppStateType)=>{
    return {

    }
}

const mapDispatchToProps = (dispatch: Dispatch<CommonTypesAC>) => {
    return {
        addTodolist(newTitle: string) {
            dispatch(addTodolistAC(newTitle))
        }
    }
}
const connector = connect( mapStateToProps, mapDispatchToProps)

export default connector(App)

type TProps = ConnectedProps<typeof connector>;
