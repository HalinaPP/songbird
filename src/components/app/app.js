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
   
  /*  console.log('l='+this.state.level);
    this.elementsOfLevel =  this.props.transportData[this.state.level].elements;
    */
  
  //  this.setAnswer(this.randomElement.id); 
    
    this.state = {
      selectedElementId:null,
      isTrueAnswer:false,
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
  

 // const randomElement = this.getRandomElememt(elementsOfLevel);

  onToggleClick = (id) =>{
   // e.preventDefault();
   console.log('on id='+id);
    this.setState((state)=>{
      return{
        selectedElementId:id,
        selectAnswers:state.selectAnswers.concat(id)
      };
    });
    this.checkAnswer(id);
  }

  onBtnClick = () => {
    console.log('level'+this.state.level);
    this.setState((state) => {
      return {
        level:state.level+1,
        selectedElementId:null,
        isTrueAnswer:false,
        randomIndex:this.getRandomElememt(),
        scoreCanWork:5,
        selectAnswers:[]
      };
    });
    //const elementsOfLevel =  this.props.transportData[this.state.level].elements;
    //const randomElement = this.getRandomElememt(elementsOfLevel);

  }

  checkAnswer = id =>{
    this.setState((state)=>{
      console.log('id='+id+' st el='+state.randomIndex);
      if(id === (state.randomIndex+1)){
        return {
          isTrueAnswer:true,
          score:state.score+state.scoreCanWork
        };
      }else{
        return {
          isTrueAnswer:false,
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
   /* this.setState(()=>{
      return {
        answerId:randIndex
      };
    });*/
    return randIndex;
   // return elementsOfLevel[randIndex];
  }

  render(){
    const {transportData} = this.props;
    const {selectedElementId, isTrueAnswer,level,levelsData,randomIndex,score,selectAnswers} = this.state;
    const elementsOfLevel = this.getElementsOfLevel(level);
    /*const elementsOfLevel =  transportData[0].elements;
    const randomElement = this.getRandomElememt(elementsOfLevel);*/
    // this.checkAnswer(randomElement.id);
    const randomElement = elementsOfLevel[randomIndex];
    console.log('id='+selectedElementId);
    const selectElement = selectedElementId !== null ? elementsOfLevel[selectedElementId-1] : {};
    console.log(selectElement);
   console.log('is true answ='+isTrueAnswer);
   // const active = 1;
    //alert(randIndex);
    return (
        <div className="container">
          <AppHeader levelsData={levelsData} activeLevel = {level} score={score}/>
          <Question element={randomElement} trueAnswer={isTrueAnswer}/>
          <div className="row">
            <div className="col-lg-6">
              <AnswerChoiceList 
                answerElementIndex={randomElement.id}  
                elementsOfLevel={elementsOfLevel} 
                selectAnswers = {selectAnswers}
                onToggleClick = {this.onToggleClick}
              />
            </div>
            <div className="col-lg-6 card info-card">
              <InfoCard selectElement={selectElement}/>
            </div>
          </div>
          <BtnNextLevel active={isTrueAnswer} onBtnClick = {this.onBtnClick}/>
        </div>
      );
    }
  };
export default App;