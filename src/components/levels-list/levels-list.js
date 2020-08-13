import React, {Component} from 'react';
import './levels-list.css';

import LevelsListItem from '../levels-list-item';

class LevelsList extends Component {
 // alert(levelsData);
  constructor(props){
    super(props);
    this.state ={
      currentLevel:props.levelsData[0][0]
    }
  }
  render(){
    const {levelsData} = this.props;
    const items = levelsData.map((title)=>{
      const isActive = this.state.currentLevel===title[0] ? true : false;
      const classNameItem = isActive ? "page-item active col-lg-2" : "page-item  col-lg-2";
      return <li key={title[0]} className={classNameItem}><LevelsListItem  title={title[1]} isActive={isActive}/></li> ;
    });

    return (
      <ul className="pagination">
        {items}
      </ul>
    );
  }
}
export default LevelsList;
