import React from 'react';
import './App.css';
import Pokedex from './components/pokedex/pokedex.js';
import DetailView from './components/details/detailView.js';

function App() {
  const handleOnClick = (id) => {
    console.log(id);
  }
  return (
    <div className="App">
      <Pokedex onClick={handleOnClick}/>
      <DetailView />
    </div>
  );
}

export default App;
