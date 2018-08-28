import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const SongAudio =  function (props) {
  if(!props.selectedSong) return null

  return (

    <ReactAudioPlayer
      src ={props.selectedSong.link[1].attributes.href}
      controls
    />

    /* <div className = "song-item">
       <audio controls>
         <source src = {props.selectedSong.link[1].attributes.href} type = "audio/ogg"/>
       </audio>
       <hr/>
    </div> */
  )
}

export default SongAudio;
