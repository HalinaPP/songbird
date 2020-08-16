import React, {Component} from 'react';
import './answer-choice-list.css';

import AnswerChoiceListItem from '../answer-choice-list-item';

class AnswerChoiceList  extends Component{
  constructor(props){
    super(props);
    this.state = {
      statusChoice:null,
      clickEl:null,
      //selectAnswers:[]
    }  
  }

  onClick = (id)=>{
    console.log('click '+id);
    
    this.setState((state)=>{
        return {
       //   statusChoice:statusCode,
          clickEl:id,
          //selectAnswers:state.selectAnswers.concat(id)
        };
    });
    this.props.onToggleClick(id);
  }
  render(){
    const { elementsOfLevel, answerElementIndex,selectAnswers } = this.props;
    //const {selectAnswers} = this.state;
    const choiceItems = elementsOfLevel.map((title)=>{
      const id = title.id;
      let statusChoice=null;
      console.log('select='+selectAnswers+typeof(selectAnswers));
      if(selectAnswers.indexOf(id)!==-1){
        console.log('selId='+id+'answerId='+answerElementIndex);
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