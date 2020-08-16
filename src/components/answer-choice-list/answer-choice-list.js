import React, {Component} from 'react';
import './answer-choice-list.css';

import AnswerChoiceListItem from '../answer-choice-list-item';

class AnswerChoiceList  extends Component{
  constructor(props){
    super(props);
    this.state = {
      clickEl:null,
    }  
  }

  onClick = (id)=>{
     this.setState((state)=>{
        return {
           clickEl:id,
          };
    });
    this.props.onToggleClick(id);
  }

  render(){
    const { elementsOfLevel, answerElementIndex,selectAnswers } = this.props;
    
    const choiceItems = elementsOfLevel.map((title)=>{
      const id = title.id;
      let statusChoice=null;
      if(selectAnswers.indexOf(id)!==-1){
         statusChoice = (id === answerElementIndex) ? "right" :"error";
      }
      return <li 
                key={id} 
                className="list-group-item"
                onClick={()=>this.onClick(id)}
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
}

export default AnswerChoiceList;