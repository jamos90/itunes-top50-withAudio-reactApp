import React from 'react';

const SongDetail =  function (props) {
  if(!props.selectedSong) return null
  return (

    <div className = "song-item">

       <p>Song Title: {props.selectedSong['im:name'].label}</p>
       <p> Artist: {props.selectedSong.title.label}</p>
       <p> Chart Position: {props.selectedSong.index}</p>
       <p> Album Cover:  <img src = {props.selectedSong['im:image'][2].label}/>
       <audio controls>
         <source src = {props.selectedSong.link[1].attributes.href} type = "audio/ogg"/>
       </audio>
       </p>
       <hr/>
    </div>
  )
}

export default SongDetail;
