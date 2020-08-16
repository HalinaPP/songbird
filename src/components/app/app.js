import React, {Component} from 'react';

import AppHeader from '../app-header';
import Question from '../question';
import AnswerChoiceList from '../answer-choice-list';
import InfoCard from '../info-card';
import BtnNextLevel from '../btn-next-level';

import './app.css';

class App extends Component {
  
  constructor(props){
    super(props);
   
    this.levelsData = this.props.transportData.map((item,index)=>{
      return [index,item.alias,item.title];
    });
   
    this.state = {
      selectedElementIdDone:null,
      isTrueAnswerDone:false,
      answerIndex:null,
      level:0,
      elementsOfLeve:null ,
      randomIndex:this.getRandomElememt(),
      levelsData:this.levelsData,
      score:0,
      scoreCanWork:5,
      selectAnswers:[]
    }
  }

  getElementsOfLevel = (level)=>{
      return this.props.transportData[level].elements;
  }
  
  onToggleClick = (id) =>{
    this.setState((state)=>{
      const selAnswers = state.isTrueAnswerDone 
                          ? state.selectAnswers 
                          : state.selectAnswers.concat(id);
      return{
        selectedElementId:id,
        selectAnswers:selAnswers
      };
    });
    if(!this.state.isTrueAnswerDone)
      this.checkAnswer(id);
  }

  onBtnClick = () => {
    this.setState((state) => {
      return {
        level:state.level+1,
        selectedElementId:null,
        isTrueAnswerDone:false,
        randomIndex:this.getRandomElememt(),
        scoreCanWork:5,
        selectAnswers:[]
      };
    });
  }

  checkAnswer = id =>{
    this.setState((state)=>{
      if(id === (state.randomIndex+1)){
        return {
          isTrueAnswerDone:true,
          score:state.score+state.scoreCanWork
        };
      }else{
        return {
          isTrueAnswerDone:false,
          scoreCanWork:state.scoreCanWork-1
        };
      }
    });
  }

  setAnswer = (index) =>{
    this.setState(()=>{
      return {
        answerIndex:index
      };
    });
  }

  getRandomElememt = ()=>{
    const randIndex = Math.floor(Math.random()*6);
    return randIndex;
  }

  render(){
    const {selectedElementId, isTrueAnswerDone,level,levelsData,
            randomIndex,score,selectAnswers} = this.state;
    const elementsOfLevel = this.getElementsOfLevel(level);
    /*const elementsOfLevel =  transportData[0].elements;
    const randomElement = this.getRandomElememt(elementsOfLevel);*/
    // this.checkAnswer(randomElement.id);
    const randomElement = elementsOfLevel[randomIndex];
    console.log('selelid='+selectedElementId);
    const selectElement = selectedElementId !== null 
                          ? elementsOfLevel[selectedElementId-1] 
                          : null;
    console.log('is true answ='+isTrueAnswerDone);
    return (
        <div className="container">
          <AppHeader levelsData={levelsData} activeLevel = {level} score={score}/>
          <Question element={randomElement} trueAnswer={isTrueAnswerDone}/>
          <div className="row">
            <div className="col-lg-6">
              <AnswerChoiceList 
                answerElementIndex={randomElement.id}  
                elementsOfLevel={elementsOfLevel} 
                selectAnswers = {selectAnswers}
                trueAnswer={isTrueAnswerDone}
                onToggleClick = {this.onToggleClick}
              />
            </div>
            <div className="col-lg-6 card info-card">
              <InfoCard selectElement={selectElement}/>
            </div>
          </div>
          <BtnNextLevel active={isTrueAnswerDone} onBtnClick = {this.onBtnClick}/>
        </div>
      );
    }
  };
export default App;