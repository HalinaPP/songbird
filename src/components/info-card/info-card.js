import React, {Component} from 'react';
import './info-card.css';

import ElementImage from '../element-image';
import ElementTitle from '../element-title';
import ElementTitleEng from '../element-title-eng';
import ElementAudio from '../element-audio';
import ElementDescription from '../element-description';

class InfoCard extends Component{
    constructor(props){
        super(props);
        console.log('pr1'+this.props.selectElement);
        this.state = {
            answerId:null
        }
    }
    render(){
        console.log('pr'+this.props.selectElement.id);
        const {id,image, name, audio,species,description} = this.props.selectElement;
        console.log('answer = '+this.state.answerId);
        if(id>0){
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
}
export default InfoCard;