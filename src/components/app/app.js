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
      isTrueAnswerDone:false,
      level:0,
      randomIndex:this.getRandomElememt(),
      score:0,
      scoreCanWork:this.maxForLevel,
      selectAnswers:[],
      activeAudioplayer: null
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
      if(!state.isTrueAnswerDone){
        if(id === (state.randomIndex+1)){
          const audio = new Audio(rightAnswerAudio);
          audio.play();
          if(state.activeAudioplayer!== null){
            state.activeAudioplayer.current.audio.current.pause();
          }
          return {
            isTrueAnswerDone:true,
            score:state.score+state.scoreCanWork,
            activeAudioplayer:null,
            selectedElementId:id,
            selectAnswers:selAnswers
          };
        }else{
          const audio = new Audio(wrongAnswerAudio);
          audio.play();
          return {
            isTrueAnswerDone:false,
            scoreCanWork:state.scoreCanWork-1,
            selectedElementId:id,
            selectAnswers:selAnswers
          };
        }
      }else{
        return {
          selectedElementId:id,
          selectAnswers:selAnswers
        };
      }
    });
  }

  onTogglePlay = (player) =>{
    this.setState((state)=>{
      if(state.activeAudioplayer!==null && state.activeAudioplayer!==player){
        state.activeAudioplayer.current.audio.current.pause();
      }
      return{
        activeAudioplayer:player
      };
    });
  }

  onBtnClick = (elementName) => {
    this.setState((state) => {
      const newLevel = state.level+1;
      console.log('Правильный ответ уровня '+newLevel+': '+elementName);
      return {
        level:newLevel,
        selectedElementId:null,
        isTrueAnswerDone:false,
        randomIndex:this.getRandomElememt(),
        scoreCanWork:this.maxForLevel,
        selectAnswers:[],
        activeAudioplayer:null
      };
    });
  }

 onBtnPlayAgainClick = (audio) => {
  audio.pause();
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

  getRandomElememt = ()=>{
    const randIndex = Math.floor(Math.random()*6);
    return randIndex;
  }

  render(){
    const {selectedElementId, isTrueAnswerDone,level,
            randomIndex,score,selectAnswers} = this.state;
    if(level === this.levelCount){
      return (
        <div className="container">
          <Congratulations 
            score={score} 
            maxCount={this.levelCount*this.maxForLevel}
            onBtnPlayAgainClick = {this.onBtnPlayAgainClick}/>
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
            <AppHeader levelsData={this.levelsData} activeLevel = {level} score={score}/>
            <Question 
              element={randomElement} 
              trueAnswer={isTrueAnswerDone}
              onTogglePlay = {this.onTogglePlay}
            />
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <AnswerChoiceList 
                  answerElementIndex={randomElement.id}  
                  elementsOfLevel={elementsOfLevel} 
                  selectAnswers = {selectAnswers}
                  trueAnswer={isTrueAnswerDone}
                  onToggleClick = {this.onToggleClick}
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <InfoCard 
                  selectElement={selectElement}
                  onTogglePlay = {this.onTogglePlay}
                />
              </div>
            </div>
            <BtnNextLevel 
              active={isTrueAnswerDone} 
              btnLabel = 'Следующий уровень'
              onBtnClick = {()=>this.onBtnClick(randomElement.name)}/>
          </div>
        );
      }
    }
  };
export default App;