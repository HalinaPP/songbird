import React from 'react';

import './levels-list-item.css';

const LevelsListItem = ({title}) =>{
  return (
    <a href='/#' className="page-link">
      {title}
    </a>
  );
}
export default LevelsListItem;