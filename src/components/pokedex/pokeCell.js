import React from 'react';
import './pokeCell.scss';
import sprites from '../assets/sprites.png';

const PokeCell = ({pokeClass, DisplayStat}) => {
    const { id, backgroundPosition } = pokeClass;
    const style = { backgroundImage: `url(${sprites})`, backgroundPosition };
    return (
        <button onClick={() => DisplayStat(id)} style={style} className="poke-cell"></button>
    )
}

export default PokeCell;