import React, {Component} from 'react';
import './question.css';

import ElementImage from '../element-image';
import ElementTitle from '../element-title';
import ElementAudio from '../element-audio';
import unknownTransport from '../../helpers/unknown.jpg';

class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '*****'
        }
    }
    render(){
        const {name} = this.state;
        const {element, trueAnswer} = this.props;
        const imageFileName = trueAnswer ? element.image : unknownTransport;
        const title = trueAnswer ? element.name : name;
        return (
            <div className="col-lg-12 card question">
                <ElementImage imageFileName = {imageFileName}/>
                <div className="question-info">
                    <ElementTitle title={title}/>
                    <hr/>
                    <ElementAudio audioFileName={element.audio} isTrueAnswerDone={trueAnswer}/>
                </div>
            </div>
        );
    }
}
export default Question;