import React from 'react';
import SongDetail from './SongDetail.js';


class SongList extends React.Component {
  render(){
      // const topSongs = this.props.songs.map((song, index) =>{
      //   return <SongDetail song={song['im:name'].label} key={song.id.attributes['im:id']} artist={song["im:artist"].label } chartPosition = {index}/>
      // })
      const options = this.props.songs.map((song, index) =>{
        return <option value = {index} key = {song.id.attributes['im:id']}>
          {song['im:name'].label}</option>

      });

    return(
      <div>
        <select
          id ="song-selector"
          defaultValue ="default"
        >
          <option disabledValue= 'default'>Select a song...</option>
        {options}
        </select>
      </div>
    )
  }

}

export default SongList;
