import React from 'react';

import AppHeader from '../app-header';
import Question from '../question';
import AnswerChoiceList from '../answer-choice-list';
import InfoCard from '../info-card';
import BtnNextLevel from '../btn-next-level';

import './app.css';

const App = ({transportData})=> {
  
  const levelsData = transportData.map((item)=>{
    return [item.alias,item.title];
  });
  const level=0;
 // const randIndex = Math.floor(Math.random()*6);
 const randIndex=0;
  const elementsOfLevel =  transportData[level].elements;
  const randomElement =elementsOfLevel[randIndex];
  //alert(randIndex);
  return (
      <div className="container">
        <AppHeader levelsData={levelsData} />
        <Question element={randomElement} />
        <div className="row">
          <div className="col-lg-6">
            <AnswerChoiceList answerElementIndex={randIndex}  elementsOfLevel={elementsOfLevel} />
          </div>
          <div className="col-lg-6 card info-card">
            <InfoCard />
          </div>
        </div>
        <BtnNextLevel />
      </div>
    );
  };
export default App;