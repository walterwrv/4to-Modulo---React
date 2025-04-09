import React from 'react';

const CharacterCard = ({ character, onFavorite, isFavorite }) => (
  <div className="bg-white shadow-md rounded p-4">
    <img src={character.image} alt={character.name} className="rounded" />
    <h2 className="text-lg font-bold mt-2">{character.name}</h2>
    <p>Especie: {character.species}</p>
    <p>Locación: {character.location.name}</p>
    <button
      className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
      onClick={() => onFavorite(character)}
    >
      {isFavorite ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
    </button>
  </div>
);

export default CharacterCard;
