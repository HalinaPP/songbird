import React from 'react';
import './info-card.css';

import ElementImage from '../element-image';
import ElementTitle from '../element-title';
import ElementTitleEng from '../element-title-eng';
import ElementAudio from '../element-audio';
import ElementDescription from '../element-description';

const InfoCard = (props) => {
    if(props.selectElement){
        const {image, name, audio,species,description} = props.selectElement;
        return (
            <div className="card info-card">
                <div className="info-card-bl">
                    <ElementImage imageFileName={image}/>
                    <div className="info-card-info">
                        <ElementTitle title={name}/>
                        <hr/>
                        <ElementTitleEng titleEng={species}/>
                        <hr/>
                        <ElementAudio audioFileName={audio}/>
                    </div>
                </div>
                <ElementDescription description={description} />
                
               
            </div>
            /* */
        );
    }else{
        return (
            <div className="card info-card">Послушайте плеер.<br/>Выберите правильный ответ из списка.</div>
        );
    }
}
export default InfoCard;