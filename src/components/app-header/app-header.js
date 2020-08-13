import React from 'react';
import './app-header.css';
import Score from '../score';
import LevelsList from '../levels-list';
import logo from '../../helpers/logo.png';

const AppHeader = ({levelsData}) =>{
    return (
        <div>
            <div className="app-header d-flex">
                <img src={logo} alt='Transport Quiz' title='Transport Quiz' />
                <Score />
            </div>
            <LevelsList levelsData = {levelsData} />
        </div>
      );
}
export default AppHeader;