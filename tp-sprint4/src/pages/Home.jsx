import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getCharactersByName } from '../services/api';
import { toast } from 'react-toastify';
import SearchForm from '../components/SearchForm';
import CharacterCard from '../components/CharacterCard';
import Loader from '../components/Loader';
import { getFavorites, saveFavorite, removeFavorite } from '../utils/localStorage';


const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState(getFavorites());

  const firstLoad = useRef(true); // referencia que usamos para saber si es la 1ra carga

  useEffect(() => {
    if (firstLoad.current) {
      //solo entra la primera vez
      firstLoad.current = false; // la próxima vez ya no entra
      loadAllCharacters(); // cargamos todos los personajes
    }
  }, []);

  const loadAllCharacters = async () => {
    try {
      setLoading(true);
      const res = await getCharactersByName(''); // sin nombre = trae todos
      setCharacters(res);
    } catch (error) {
      console.error('Error al cargar personajes: Error', error.status);
      toast.error(`Hubo un error. Código de estado: ${error}`, {
        autoClose: 3000, // Auto-close after 5 seconds, for example
      });
    } finally {
      setLoading(false);
    }
  };

  //Ejecutá esta función solo si la variable favorites cambia. Si no cambió, devolveme el valor anterior que ya calculé.
  const favoriteIds = useMemo(() => favorites.map(f => f.id), [favorites]);

  const handleSearch = async (name) => {
    setLoading(true);
    try {
      const data = await getCharactersByName(name);
      setCharacters(data);
      toast.success('Personajes cargados exitosamente!');
    } catch (error) {
      toast.error('No se encontraron personajes o hubo un error.');
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (character) => {
    const isFav = favorites.find((c) => c.id === character.id);
    if (isFav) {
      removeFavorite(character.id);
    } else {
      saveFavorite(character);
    }
    setFavorites(getFavorites());
  };


  return (
    <div className="p-4 max-w-4xl mx-auto">
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {characters.map((char) => (
          <CharacterCard
            key={char.id}
            character={char}
            onFavorite={toggleFavorite}
            isFavorite={favoriteIds.includes(char.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
