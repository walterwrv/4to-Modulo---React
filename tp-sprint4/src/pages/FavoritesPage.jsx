import React, { useEffect, useState } from 'react';
import CharacterCard from '../components/CharacterCard';
import { getFavorites, removeFavorite } from '../utils/localStorage';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (character) => {
    removeFavorite(character.id);
    setFavorites(getFavorites());
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Mis Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No tenés personajes favoritos aún.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {favorites.map((char) => (
            <CharacterCard
              key={char.id}
              character={char}
              onFavorite={handleRemove}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
