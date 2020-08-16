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
            <div className="">
                <ElementImage imageFileName={image}/>
                <div className="info-card-info">
                    <ElementTitle title={name}/>
                    <ElementTitleEng titleEng={species}/>
                    <ElementAudio audioFileName={audio}/>
                </div>
                <ElementDescription description={description} />
            </div>
        );
    }else{
        return (
            <div>Послушайте плеер.<br/>Выберите правильный ответ из списка.</div>
        );
    }
}
export default InfoCard;