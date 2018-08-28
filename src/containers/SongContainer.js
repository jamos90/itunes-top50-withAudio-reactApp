import React from 'react';
import SongDetail from '../components/SongDetail.js'
import SongList from '../components/SongList.js'
import SongAudio from '../components/SongAudio.js'
import SongPurchase from '../components/SongPurchase.js'

class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      selectedSong: null,
      chartPosition: null
    }
    this.handleSongSelected = this.handleSongSelected.bind(this);
  }
  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=50/json'
    fetch(url)
    .then((res) =>{
      return res.json();
    })
    .then((songs) =>{
      this.setState({
        songs: songs.feed.entry
      });
    })
  }

  handleSongSelected(index){
    const selectedSong = this.state.songs[index];
    this.setState({
      selectedSong: selectedSong,
      chartPosition: parseInt(index)

    });
  }


  render(){
    return (
      <div className ="song-list">
       <SongList
         songs = {this.state.songs}
         onSongSelected = {this.handleSongSelected}
        />

        <SongDetail
          selectedSong = {this.state.selectedSong}
          chartPosition = {this.state.chartPosition +1}
        />

        <SongPurchase
          selectedSong = {this.state.selectedSong}
        />

        <SongAudio
          selectedSong = {this.state.selectedSong}
        />

      </div>
    )
  }
}

export default SongContainer;
