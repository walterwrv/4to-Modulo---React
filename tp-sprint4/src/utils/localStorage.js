export const getFavorites = () => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  };
  
  export const saveFavorite = (character) => {
    const current = getFavorites();
    const updated = [...current, character];
    localStorage.setItem('favorites', JSON.stringify(updated));
  };
  
  export const removeFavorite = (id) => {
    const updated = getFavorites().filter(char => char.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };
  