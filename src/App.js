import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SongContainer from './containers/SongContainer.js'

class App extends Component {
  render() {
    return (
      <div>
      <h1>Song List</h1>
     <SongContainer />
     </div>
    );
  }
}

export default App;
