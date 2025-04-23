// src/pages/FamiliarDetail.jsx
import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import Swal from 'sweetalert2';
import { FamiliarContext } from '../context/FamiliarContext';

const FamiliarDetail = () => {
  const { id } = useParams();
  const [familiar, setFamiliar] = useState(null);

  const navigate = useNavigate();
  const { setFamiliares} = useContext(FamiliarContext);

  useEffect(() => {
    const fetchFamiliar = async () => {
      const res = await api.get(`/familiares/${id}`);
      console.log('res -> '.res)
      setFamiliar(res.data);
    };
    fetchFamiliar();
  }, [id]);

  if (!familiar) return <p className="text-center mt-10 text-white text-2xl">Cargando...</p>;

  const handleDelete = async (id, setFamiliares) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
    });
  
    if (result.isConfirmed) {
      await api.delete(`/familiares/${id}`);
      setFamiliares(prev => prev.filter(fam => fam.id !== id));
      Swal.fire('Eliminado', 'El familiar ha sido eliminado.', 'success');
      navigate('/');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-300 shadow rounded">
        <img src={familiar.avatar} alt={familiar.name} className="w-64 h-64  object-cover rounded-full mx-auto" />
        <h2 className="text-2xl font-bold text-center mt-4">{familiar.name}</h2>
        <p className="text-center">Edad: {familiar.age}</p>
        <p className="text-center">Parentesco: {familiar.parentesco}</p>

        <div className="mt-6 flex justify-center gap-4">
            <button
                onClick={() => handleDelete(familiar.id, setFamiliares)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
            >
                Eliminar
            </button>
            <Link to="/" className="bg-gray-500 px-4 py-2 text-white rounded">
            Volver
            </Link>
        </div>
    </div>
  );
};

export default FamiliarDetail;
