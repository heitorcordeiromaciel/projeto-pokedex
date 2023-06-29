import React from 'react';
import Card from './Card';

const Pokedex = ({ pokedex, removeFromPokedex }) => {
  return (
    <div>
      {pokedex.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} removeFromPokedex={removeFromPokedex} />
      ))}
    </div>
  );
};

export default Pokedex;
