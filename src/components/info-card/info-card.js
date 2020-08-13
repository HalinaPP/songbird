import React, {Component} from 'react';
import './info-card.css';

import ElementImage from '../element-image';
import ElementTitle from '../element-title';
import ElementTitleEng from '../element-title-eng';
import ElementAudio from '../element-audio';
import ElementDescription from '../element-description';

class InfoCard extends Component{
    constructor(){
        super();
        this.state = {
            answerId:0
        }
    }
    render(){
        if(this.state.answerId>0){
            return (
                <div className="">
                    <ElementImage />
                    <ElementTitle />
                    <ElementTitleEng />
                    <ElementAudio />
                    <ElementDescription />
                </div>
            );
        }else{
            return (
                <div>Прослушайте запись и выберите правильный ответ.</div>
            );
        }
    }
}
export default InfoCard;