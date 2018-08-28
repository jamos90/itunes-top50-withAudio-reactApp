import React from 'react';

const SongPurchase =  function (props) {
  if(!props.selectedSong) return null

  return (
    <div>

     <a href = {props.selectedSong.link[0].attributes.href}> Further Information </a>

    </div>
  )
}

export default SongPurchase;
