import React from 'react';

type ButtonPropsType ={
    nameButton: string
    callBack: () => void
}
export const Button = (props: ButtonPropsType ) => {
    return (
      <button onClick={props.callBack}>{props.nameButton}</button>
    );
};

