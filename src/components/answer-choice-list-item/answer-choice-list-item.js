import React from 'react';
import './answer-choice-list-item.css';

const AnswerChoiceListItem = ({title,statusChoice}) => {
    const classNameCircle = statusChoice !== null ? 'li-circle '+statusChoice : 'li-circle';
       
    return (
        <React.Fragment>
            <span className={classNameCircle}></span>
            {title}
        </React.Fragment>
    );
}
export default AnswerChoiceListItem;