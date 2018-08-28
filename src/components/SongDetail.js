import React from 'react';

const SongDetail =  function (props) {
  return (
    <div className = "song-item">
       <p>Song Title: {props.song}</p>
      <p> Artist: {props.artist}</p>
      <p> Chart Position: {props.chartPosition +1}</p>
      <hr/>
    </div>
  )
}

export default SongDetail;
