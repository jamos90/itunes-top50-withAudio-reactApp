import React from 'react';

const SongDetail =  function (props) {
  if(!props.selectedSong) return null

  return (

    <div className = "song-item">

       <p>Song Title: {props.selectedSong['im:name'].label}</p>
       <p> Artist: {props.selectedSong.title.label}</p>
       <p> Chart Position: {props.selectedSong.index}</p>
       <p><img src = {props.selectedSong['im:image'][2].label}/></p>
    </div>
  )
}

export default SongDetail;
