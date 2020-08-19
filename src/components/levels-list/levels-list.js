import React from 'react';
import './levels-list.css';
import LevelsListItem from '../levels-list-item';

const LevelsList = ({levelsData,activeLevel}) => {
   
    const items = levelsData.map((title)=>{
      const isActive = activeLevel===title[0] ? true : false;
      const classNameItem = isActive ? "page-item active  " : "page-item ";
      return (
        <li key={title[1]} className={classNameItem}>
            <LevelsListItem  title={title[2]} isActive={isActive}/>
        </li>
        );
    });

    return (
      <ul className="pagination d-flex">
        {items}
      </ul>
    );

}
export default LevelsList;