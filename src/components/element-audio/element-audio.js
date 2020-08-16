import React from 'react';


import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './element-audio.css';
const ElementAudio = ({audioFileName}) =>{
     
  //autoPlayAfterSrcChange={false} этот?
  //Вызов паузы: refPlayer.current.audio.current.pause()
const contr = ['MAIN_CONTROLS','VOLUME_CONTROLS'];
/*const playIcon = {'<svg xmlns="http://www.w3.org/2000/svg" focusable="false" style="transform: rotate(360deg);" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M10 16.5v-9l6 4.5M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z" fill="currentColor"></path></svg>'};
  /*'<svg xmlns="http://www.w3.org/2000/svg" focusable="false" style="transform: rotate(360deg);" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><symbol id="icon-play2" viewBox="0 0 32 32"><path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM12 9l12 7-12 7z"></path></symbol></defs></svg>'};
/*                      <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" >
*/return (
      <AudioPlayer
        //autoPlay
        src={audioFileName}
        onPlay={e => console.log("onPlay")}
        customControlsSection= {contr}
        showJumpControls={false}
        autoPlayAfterSrcChange={false}
       // customIcons={playIcon}
        // other props here
      />
    );
}
export default ElementAudio;