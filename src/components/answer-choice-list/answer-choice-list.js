import React from 'react';
import './answer-choice-list.css';

import AnswerChoiceListItem from '../answer-choice-list-item';

const AnswerChoiceList = (props) =>{

  const onClick = (id)=>{
    props.onToggleClick(id);
  }

  const { elementsOfLevel, answerElementIndex,selectAnswers } = props;
    
  const choiceItems = elementsOfLevel.map((title)=>{
    const id = title.id;
    let statusChoice=null;
    if(selectAnswers.indexOf(id)!==-1){
        statusChoice = (id === answerElementIndex) ? "right" :"error";
    }
    return <li 
              key={id} 
              className="list-group-item"
              onClick={()=>onClick(id)}
            >
              <AnswerChoiceListItem title={title.name} statusChoice={statusChoice} />
          </li> ;
  });

  return (
    <ul className="list-group">
      {choiceItems}
    </ul>
  );
 
}

export default AnswerChoiceList;