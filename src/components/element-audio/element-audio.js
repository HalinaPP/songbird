import React, {Component} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './element-audio.css';
 
class ElementAudio extends Component{
  constructor(props){
    super(props);
    this.player = React.createRef();
  }
  
  onPlay(){
    this.props.onTogglePlay(this.player);
  }
  
  render(){
    const {audioFileName} = this.props;
    const contr = ['MAIN_CONTROLS','VOLUME_CONTROLS'];
  
    return (
          <AudioPlayer
            src={audioFileName}
            customControlsSection= {contr}
            showJumpControls={false}
            autoPlayAfterSrcChange={false}
            ref={this.player}
            onPlay = {()=>this.onPlay()}
          />
        );
    }
}
export default ElementAudio;