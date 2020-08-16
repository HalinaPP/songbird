import React, {Component} from 'react';

import AppHeader from '../app-header';
import Question from '../question';
import AnswerChoiceList from '../answer-choice-list';
import InfoCard from '../info-card';
import BtnNextLevel from '../btn-next-level';
import Congratulations from '../congratulations';
import rightAnswerAudio from '../../helpers/right-answer.mp3';
import wrongAnswerAudio from '../../helpers/wrong-answer.mp3';
import './app.css';

class App extends Component {
  
  constructor(props){
    super(props);
   
    this.levelsData = this.props.transportData.map((item,index)=>{
      return [index,item.alias,item.title];
    });
    this.levelCount = this.props.transportData.length;
    this.maxForLevel = 5;
    this.state = {
    //  selectedElementIdDone:null,
      isTrueAnswerDone:false,
      //answerIndex:null,
      level:0,
      randomIndex:this.getRandomElememt(),
      levelsData:this.levelsData,
      score:0,
      scoreCanWork:this.maxForLevel,
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
    console.log('next');
    this.setState((state) => {
      return {
        level:state.level+1,
        selectedElementId:null,
        isTrueAnswerDone:false,
        randomIndex:this.getRandomElememt(),
        scoreCanWork:this.maxForLevel,
        selectAnswers:[]
      };
    });
  }

 onBtnPlayAgainClick = () => {
   console.log('play again');
    this.setState((state) => {
      return {
        level:0,
        selectedElementId:null,
        isTrueAnswerDone:false,
        randomIndex:this.getRandomElememt(),
        scoreCanWork:this.maxForLevel,
        selectAnswers:[],
        score:0,
      
      };
    });
  }

  checkAnswer = id =>{
    this.setState((state)=>{
      
      if(id === (state.randomIndex+1)){
        const audio = new Audio(rightAnswerAudio);
        audio.play();
        return {
          isTrueAnswerDone:true,
          score:state.score+state.scoreCanWork
        };
      }else{
        const audio = new Audio(wrongAnswerAudio);
        audio.play();
        return {
          isTrueAnswerDone:false,
          scoreCanWork:state.scoreCanWork-1
        };
      }
    });
  }

  /*setAnswer = (index) =>{
    this.setState(()=>{
      return {
        answerIndex:index
      };
    });
  }*/

  getRandomElememt = ()=>{
    const randIndex = Math.floor(Math.random()*6);
    return randIndex;
  }

  render(){
    const {selectedElementId, isTrueAnswerDone,level,levelsData,
            randomIndex,score,selectAnswers} = this.state;
    if(level === this.levelCount){
      return (
        <div className="container">
          <Congratulations 
            score={score} 
            maxCount={this.levelCount*this.maxForLevel}
            onBtnPlayAgainClick = {()=>this.onBtnPlayAgainClick()}/>
        </div>
      );
    }else{

      const elementsOfLevel = this.getElementsOfLevel(level);
      const randomElement = elementsOfLevel[randomIndex];
      const selectElement = selectedElementId !== null 
                            ? elementsOfLevel[selectedElementId-1] 
                            : null;
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
            <BtnNextLevel 
              active={isTrueAnswerDone} 
              btnLabel = 'Следующий уровень'
              onBtnClick = {()=>this.onBtnClick()}/>
          </div>
        );
      }
    }
  };
export default App;