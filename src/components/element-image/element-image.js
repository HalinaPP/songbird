import React from 'react';
import './element-image.css';

const ElementImage = ({imageFileName}) =>{
   return( 
      <img src={process.env.PUBLIC_URL +imageFileName} alt='' title='' className="element-image"/>
      );
}
export default ElementImage;