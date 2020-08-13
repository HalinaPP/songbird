import React, {Component} from 'react';
import './score.css';

class Score  extends Component{
    state = {
        score:0
    }
    render(){
        return (
        <span className="score">Score: {this.state.score}</span>
        );
    }
}
export default Score;