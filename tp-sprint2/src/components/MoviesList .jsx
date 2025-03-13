import React from 'react'
import movies from '../api/movies.json'

const MoviesList = ({ watchlist, setWatchlist }) => {

  const addToWatchlist = (movie) => {
    
    if (!watchlist.some((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
      localStorage.setItem('peliculas', JSON.stringify([...watchlist, movie]));

    }

  }

  return (
    <div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className='bg-gray-500 p-4 rounded shadow-md text-center'
        >
          <img src={`src/assets/imgMovies/${movie.img}.jpg`} />
          <h3 className='text-lg font-semibold'>{movie.name}</h3>
          <button
            className='bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-green-700 hover:shadow-lg active:scale-95'
            onClick={() => addToWatchlist(movie) }
          >
            Agregar a watchlist
          </button>
        </div>
      ))}


    </div>
  )
}

export default MoviesList 