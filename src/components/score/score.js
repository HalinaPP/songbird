import React, {Component} from 'react';
import './score.css';

class Score  extends Component{
    /*state = {
        score:0
    }*/

    render(){
        //const currentScore = this.state.score + this.props.scoreOfLevel;
        return (
        <span className="score">Score: {this.props.score}</span>
        );
    }
}
export default Score;