import React from "react";

const WatchlistModal = ({ isModalOpen, setIsModalOpen, watchlist, setWatchlist }) => {
    if (!isModalOpen) return null;

    const onClose = () => setIsModalOpen(false);

    const removerFromWatchlist = (id) => {
        const newWatchlist = watchlist.filter((movie) => movie.id !== id);
        setWatchlist(newWatchlist);
        localStorage.setItem("peliculas", JSON.stringify(newWatchlist));
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-11/12 max-w-md relative">
                {/* Encabezado del modal */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Watchlist</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-red-500 transition-all text-xl"
                    >
                        ✖
                    </button>
                </div>

                {/* Contenido del modal */}
                {watchlist.length === 0 ? (
                    <p className="text-gray-600 text-center">No hay películas en la lista</p>
                ) : (
                    <ul>
                        {watchlist.map((movie) => (
                            <li
                                key={movie.id}
                                className="flex justify-between items-center bg-gray-100 rounded-lg p-3 mb-2 shadow-sm"
                            >
                                <span className="text-gray-800 font-medium">{movie.name}</span>
                                <button
                                    className="bg-red-600 text-white px-3 py-1 rounded-md shadow-md transition-all duration-300 hover:bg-red-700 active:scale-95"
                                    onClick={() => removerFromWatchlist(movie.id)}
                                >
                                    Remover
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default WatchlistModal;

