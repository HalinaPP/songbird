import React from 'react';
import './question.css';

import ElementImage from '../element-image';
import ElementTitle from '../element-title';
import ElementAudio from '../element-audio';

const Question = ({element}) =>{
    return (
        <div className="col-lg-12 card question">
            <ElementImage imageFileName = {element.image}/>
            <div>
                <ElementTitle title={element.name}/>
                <hr/>
                <ElementAudio audioFileName={element.audio}/>
            </div>
        </div>
    );
}
export default Question;