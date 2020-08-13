import React, {Component} from 'react';

import './levels-list-item.css';

export default class LevelsListItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      active: props.isActive
    } 
  }
 
  render(){
    const {title} = this.props;
    return (
     <a href='/#' className="page-link">
       {title}
      </a>
   );
  }
}
