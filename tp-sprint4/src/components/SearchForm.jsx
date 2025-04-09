import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === '') return;
    onSearch(search);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        className="border p-2 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar personaje..."
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default SearchForm;
