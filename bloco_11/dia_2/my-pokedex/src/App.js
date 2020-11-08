import React from 'react';
import './App.css';
import pokeList from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Pokedex list={pokeList} />
      </div>
    )
  }
}

export default App;
