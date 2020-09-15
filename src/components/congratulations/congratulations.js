import React from 'react';
import BtnNextlevel from '../btn-next-level';
import logo from '../../helpers/logo.png';
import congratulationsAudio from '../../helpers/congratulations.mp3';
import winnerAudio from '../../helpers/winner.mp3';
import './congratulations.css';
import diplom from '../../helpers/diplom.jpg';

const Congratulations = (props) =>{
    const  {score, maxCount} = props;
    const winner = score === maxCount ? true : false;
    const audioFile = winner ? winnerAudio : congratulationsAudio;
    const audio = new Audio(audioFile);
    audio.play();
    return (
        <div className = "congratulations">
            <img src={logo} alt='Transport Quiz' title='Transport Quiz' />
            <div className="col-12 card">
                <h1>Поздравляем!</h1>
                {   winner 
                    ? <div>Вы набрали максимально возможное количество баллов - <span>{maxCount}</span>!
                            <br/><a href={diplom} target='_blank' rel="noopener noreferrer">Получить диплом знатока</a></div>
                    : <div>Вы набрали <span>{score}</span> из <span>{maxCount}</span> возможных баллов!</div>
                }
            </div>
            <BtnNextlevel 
                active={true}  
                btnLabel='Сыграть еще раз' 
                onBtnClick = {()=>props.onBtnPlayAgainClick(audio)}/>
        </div>
    );
}
export default Congratulations;
