import React from 'react';
import './element-audio.css';

const ElementAudio = ({audioFileName}) =>{
    
  //autoPlayAfterSrcChange={false} этот?
  //Вызов паузы: refPlayer.current.audio.current.pause()
  return (
      <audio src={audioFileName}></audio>
    );
}
export default ElementAudio;