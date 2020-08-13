import React from 'react';
import './answer-choice-list.css';

import AnswerChoiceListItem from '../answer-choice-list-item';

const AnswerChoiceList =({answerElementIndex,elementsOfLevel})=> {
  
  const choiceItems = elementsOfLevel.map((title)=>{
    return <li key={title.id} className="list-group-item"><AnswerChoiceListItem title={title.name} /></li> ;
  });
  return (
    <ul className="list-group">
      {choiceItems}
    </ul>
  );
}

export default AnswerChoiceList;