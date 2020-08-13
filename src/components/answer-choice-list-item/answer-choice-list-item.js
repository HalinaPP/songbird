import React from 'react';
import './answer-choice-list-item.css';

const AnswerChoiceListItem = ({title}) =>{
    return (
        <React.Fragment>
            <span>{title}</span> 
        </React.Fragment>
    );
}
export default AnswerChoiceListItem;