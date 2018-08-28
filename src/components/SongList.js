import React from 'react';
import SongDetail from './SongDetail.js';


class SongList extends React.Component {
  render(){
      const topSongs = this.props.songs.map((song) =>{
        return <SongDetail song={song['im:name'].label} key={song.id.attributes['im:id']}/>
      })

    return(
      <div>
        {topSongs}
      </div>
    )
  }

}

export default SongList;
