import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export const getCharactersByName = async (name) => {
  try {
    const res = await axios.get(`${API_URL}?name=${name}`);
    return res.data.results;
  } catch (error) {
    throw error;
  }
};
