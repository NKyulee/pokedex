import React from 'react';
import './pokedex.scss';
import PokeCell from './pokeCell.js';
import { pokeClasses } from '../classes/pokeClasses';

const Pokedex = () => {
    const DisplayStats = (id) => {
    console.log(id);
  }
    const cells = pokeClasses.map(pokeClass => {
        return (
            <PokeCell
            key={pokeClass.id}
            pokeClass={pokeClass}
            OnClick={DisplayStats}
            />
        );
    });
    return (
        <section className="poke-list">
            {cells}
        </section>
    )
}

export default Pokedex;