import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import FavoritesPage from './pages/FavoritesPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  return (
    //Con React + react-router-dom, no se recarga la página, solo se actualiza la parte del contenido que cambia. 
    // Esto hace que la navegación sea más rápida y fluida.
    <Router>
      <div className="bg-gray-800 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold bg">Rick & Morty App</h1>
        <nav className="space-x-4">
          {/* usamos <Link to="...">, que no recarga la página */}
          <Link to="/" className="hover:underline">Inicio</Link> 
          <Link to="/favoritos" className="hover:underline">Favoritos</Link>
        </nav>
      </div>
      <ToastContainer />
      <Routes>
        {/*  Si la URL es /, mostrás el componente <Home /> */}
        <Route path="/" element={<Home />} />  
        {/* Si la URL es /favoritos, mostrás el componente <FavoritesPage /> */}
        <Route path="/favoritos" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
