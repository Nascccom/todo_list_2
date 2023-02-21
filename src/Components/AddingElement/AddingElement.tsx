import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type AddingElementPropsType = {
    addItem: (newTitle: string) => void
}
export const AddingAnElement = (props: AddingElementPropsType  ) => {
    const [newTitle, setNewTitle] = useState('')
    const [error, setError] = useState('')

    const inputItemHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setNewTitle(e.currentTarget.value)
        setError('')
    }

    const addItemButtonHandler = (): void => {
        if (newTitle.trim()) {
            props.addItem(newTitle.trim())
            setNewTitle('')
        } else {
            setError('Title is required')
        }
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            addItemButtonHandler()
        }
    }

    return (
      <div>
          {!!error && <div>{error}</div>}
          <input value={newTitle}
                 onChange={inputItemHandler}
                 onKeyDown={onKeyDownHandler}/>
          <button onClick={addItemButtonHandler}>+</button>
      </div>
    );
};