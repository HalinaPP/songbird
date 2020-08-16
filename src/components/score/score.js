import React, {Component} from 'react';
import './score.css';

class Score  extends Component{
    render(){
        return (
             <span className="score">Score: {this.props.score}</span>
        );
    }
}
export default Score;