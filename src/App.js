import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SongContainer from './containers/SongContainer.js'

class App extends Component {
  render() {
    return (
      <div className="all-information">
      <h1>Itunes UK Top 50 Hits</h1>
      <p> Pick a song from the list below: </p>
     <SongContainer />
     </div>
    );
  }
}

export default App;
