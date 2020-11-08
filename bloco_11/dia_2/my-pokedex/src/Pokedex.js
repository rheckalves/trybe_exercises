import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends React.Component {
    render() {
        const { list } = this.props;
        return (
            <div className="container">
            {list.map(pokemon => <Pokemon key = {pokemon.id} id={pokemon.id} pokemon={pokemon} />)}
            </div>
        )
    }
}

export default Pokedex;