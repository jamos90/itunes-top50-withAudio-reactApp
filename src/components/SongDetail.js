import React from 'react';

const SongDetail =  function (props) {
  return (
    <div className = "song-item">
       <p>{props.song}</p>
    </div>
  )
}

export default SongDetail;
