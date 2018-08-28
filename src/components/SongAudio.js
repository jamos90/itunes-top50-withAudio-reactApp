import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const SongAudio =  function (props) {
  if(!props.selectedSong) return null

  return (
    <div>

   <p> Sample: </p>
    <ReactAudioPlayer
      src ={props.selectedSong.link[1].attributes.href}
      controls
    />
    </div>
  )
}

export default SongAudio;
