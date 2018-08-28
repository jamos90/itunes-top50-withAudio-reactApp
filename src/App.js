import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SongContainer from './containers/SongContainer.js'

class App extends Component {
  render() {
    return (
      <div>
      <h1>UK Top 20 Hits</h1>
      <p> Pick a song from the list below: </p>
     <SongContainer />
     </div>
    );
  }
}

export default App;
