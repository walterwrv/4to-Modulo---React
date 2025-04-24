// src/pages/FamiliarEdit.jsx
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { FamiliarContext } from '../context/FamiliarContext';

const FamiliarEdit = () => {

  const { setFamiliares} = useContext(FamiliarContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  // Traer los datos actuales del familiar
  useEffect(() => {
    const fetchFamiliar = async () => {
      try {
        const res = await api.get(`/familiares/${id}`);
        const familiar = res.data;

        // Precargar campos en el formulario
        setValue('name', familiar.name);
        setValue('age', familiar.age);
        setValue('parentesco', familiar.parentesco);
        setValue('avatar', familiar.avatar);
      } catch (error) {
        toast.error('Error al obtener datos del familiar');
        console.error(error);
      }
    };

    fetchFamiliar();
  }, [id, setValue]);

  // Enviar los datos actualizados
  const onSubmit = async data => {
    try {
       
        const res = await api.put(`/familiares/${id}`, data);
        setFamiliares(prev =>
          prev.map(fam => (fam.id === id ? res.data : fam))
        );
        toast.success('Familiar actualizado con éxito 🎉');
        navigate('/');
    } catch (error) {
      toast.error('Error al actualizar el familiar');
      console.error(error);
    }
  };

  return (
    <section className="p-8 max-w-xl mx-auto bg-white">
      <h1 className="text-2xl font-bold mb-6">Editar Familiar</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Nombre</label>
          <input
            type="text"
            {...register('name', { required: 'Este campo es obligatorio' })}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Edad</label>
          <input
            type="number"
            {...register('age', { required: 'Este campo es obligatorio', 
              min: {value: 0, message: 'Edad inválida'},
              max: {value: 120, message: 'Edad inválida'}, })}
            className="w-full p-2 border rounded"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Parentesco</label>
          <input
            type="text"
            {...register('parentesco', { required: 'Este campo es obligatorio' })}
            className="w-full p-2 border rounded"
          />
          {errors.parentesco && <p className="text-red-500 text-sm">{errors.parentesco.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Imagen</label>
          <input
            type="text"
            {...register('avatar', { required: 'Este campo es obligatorio' })}
            className="w-full p-2 border rounded"
          />
          {errors.avatar && <p className="text-red-500 text-sm">{errors.avatar.message}</p>}
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Guardar cambios
          </button>
          <Link to="/" className="bg-gray-500 px-4 py-2 text-white rounded">
            Volver
          </Link>
        </div>
      </form>
    </section>
  );
};

export default FamiliarEdit;
