import { useEffect, useState } from 'react'

import './App.css'
import Header from '/src/components/Header';
import MoviesList from '/src/components/MoviesList ';
import WatchlistModal from '/src/components/WatchlistModal';

function App() {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [watchlist, setWatchlist] = useState([])
    
    useEffect(() => {
      const storedWatchlist = localStorage.getItem('peliculas');
      if (storedWatchlist) {
        setWatchlist(JSON.parse(storedWatchlist));

      }
    }, []);

    
  
  return (
    <>
      <div className='bg-gray-700'>
        <Header setIsModalOpen={setIsModalOpen} />
        
        <WatchlistModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          watchlist={watchlist}
          setWatchlist={setWatchlist}
        />

        <MoviesList watchlist={watchlist} setWatchlist={setWatchlist} />.
      </div>
    </>
  )
}

export default App
