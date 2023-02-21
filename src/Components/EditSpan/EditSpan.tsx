import React, {ChangeEvent, useState} from 'react';


type EditSpanPropsType = {
    title: string
    style?: string
    callBack: (newTitle: string) => void
}
export const EditSpan = (props: EditSpanPropsType) => {
    const [newText, setNewText] = useState('')
    const [edit, setEdit] = useState(false)

    const onUpdateTitle = () => {
        setEdit(!edit)
    }

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNewText(e.currentTarget.value)
    }

    const onTransformInput = () => {
        setEdit(!edit)
        props.callBack(newText)
    }

    return (
      edit
        ? <input autoFocus
                 onChange={onChangeInput}
                 onBlur={onTransformInput}
                 value={newText}/>
        : <span className={props.style}
                onDoubleClick={onUpdateTitle}>{props.title}</span>
    );
};
