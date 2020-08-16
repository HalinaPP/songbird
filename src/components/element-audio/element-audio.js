import React, {Component} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './element-audio.css';

class ElementAudio extends Component{
  constructor(props){
    super(props);
    this.player = React.createRef();
  }
  
  render(){
    const {audioFileName,isTrueAnswerDone} = this.props;
    const contr = ['MAIN_CONTROLS','VOLUME_CONTROLS'];
    
    if(isTrueAnswerDone){
      this.player.current.audio.current.pause();
    }
    
    return (
          <AudioPlayer
            src={audioFileName}
            customControlsSection= {contr}
            showJumpControls={false}
            autoPlayAfterSrcChange={false}
            ref={this.player}
          />
        );
    }
}
export default ElementAudio;