// src/components/FamiliarCard.jsx
import { Link } from 'react-router-dom';

const FamiliarCard = ({ familiar }) => {
  return (
    <div className="bg-gray-300 shadow-md rounded-2xl p-4 flex flex-col items-center text-center">
      <img
        src={familiar.avatar}
        alt={familiar.name}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold">{familiar.name}</h2>
      <p className="text-gray-500">{familiar.parentesco}</p>
      <div className="mt-4 flex gap-2">
        <Link
          to={`/familiares/${familiar.id}`}
          className="bg-blue-500 text-white px-3 py-1 rounded-xl text-sm hover:bg-blue-600"
        >
          Ver
        </Link>
        <Link
          to={`/familiares/${familiar.id}/edit`}
          className="bg-yellow-500 text-white px-3 py-1 rounded-xl text-sm hover:bg-yellow-600"
        >
          Editar
        </Link>
      </div>
    </div>
  );
};

export default FamiliarCard;
