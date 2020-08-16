import React from 'react';
import BtnNextlevel from '../btn-next-level';
import logo from '../../helpers/logo.png';
import './congratulations.css';

const Congratulations = (props) =>{
    //const  {score, maxCount} = props;
    return (
        <div className = "congratulations">
            <img src={logo} alt='Transport Quiz' title='Transport Quiz' />
            <div className="col-12 card">
                <h1>Поздравляем!</h1>
                Вы набрали <span>{props.score}</span> из <span>{props.maxCount}</span> возможных баллов!
            </div>
            <BtnNextlevel 
                active={true}  
                btnLabel='Сыграть еще раз' 
                onBtnClick = {()=>props.onBtnPlayAgainClick()}/>
        </div>
    );
}

//<BtnNextlevel active={true} onBtnClick = {this.onBtnClick} btnLabel='Сыграть еще раз' />
        
export default Congratulations;
