import React from 'react';
import SongDetail from './SongDetail.js';


class SongList extends React.Component {
  render(){
      const topSongs = this.props.songs.map((song, index) =>{
        return <SongDetail song={song['im:name'].label} key={song.id.attributes['im:id']} artist={song["im:artist"].label } chartPosition = {index}/>
      })

    return(
      <div>
        {topSongs}
      </div>
    )
  }

}

export default SongList;
