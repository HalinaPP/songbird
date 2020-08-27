import React from 'react';
import './btn-next-level.css';

const BtnNextLevel = (props) => {
    const disabledProp = !props.active ? 'disabled':''; 
    return (
        <button 
            className="btn btn-primary btn-lg btn-block" 
            disabled={disabledProp}
            onClick = {()=>props.onBtnClick()}
        >
           {props.btnLabel}
        </button>
    );
}
export default BtnNextLevel;