// src/pages/FamiliarList.jsx
import { useContext } from 'react';

import FamiliarCard from '../components/FamiliarCard';
import { Link } from 'react-router-dom';
import { FamiliarContext } from '../context/FamiliarContext';


const FamiliarList = () => {
  const { familiares } = useContext(FamiliarContext);

  return (
    <section className="p-8 max-w-6xl mx-auto bg-grey-700">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Lista de Familiares</h1>
        <Link
          to="/familiares/create"
          className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600"
        >
          Añadir Familiar
        </Link>
      </div>

      {familiares.length === 0 ? (
        <p className="text-gray-600">No hay familiares aún.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {familiares.map(familiar => (
            <FamiliarCard key={familiar.id} familiar={familiar} />
          ))}
        </div>
      )}
    </section>
  );
};

export default FamiliarList;
