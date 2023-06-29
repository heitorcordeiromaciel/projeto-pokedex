import React, { createContext, useState } from 'react';

const PokedexContext = createContext();

const PokedexProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);

  const addToPokedex = (pokemon) => {
    // Verificar se o Pokemon já está na Pokedex antes de adicionar
    const isPokemonInPokedex = pokedex.some((p) => p.id === pokemon.id);
    if (!isPokemonInPokedex) {
      setPokedex([...pokedex, pokemon]);
    }
  };

  const removeFromPokedex = (pokemon) => {
    // Implemente a lógica para remover o Pokemon da Pokedex
    const updatedPokedex = pokedex.filter((p) => p.id !== pokemon.id);
    setPokedex(updatedPokedex);
  };

  return (
    <PokedexContext.Provider value={{ pokedex, addToPokedex, removeFromPokedex }}>
      {children}
    </PokedexContext.Provider>
  );
};

export { PokedexContext, PokedexProvider };
