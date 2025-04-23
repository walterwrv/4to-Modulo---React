// src/pages/FamiliarCreate.jsx
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { FamiliarContext } from '../context/FamiliarContext';



const FamiliarCreate = () => {
const { setFamiliares} = useContext(FamiliarContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

 
  const onSubmit = async data => {
    try {
        const res = await api.post('/familiares', data);
        toast.success('Familiar creado con éxito 🎉');
        setFamiliares(prev => [...prev, res.data]);
        reset();
        navigate('/');
    } catch (error) {
        toast.error('Error al crear el familiar');
        console.error(error);
    }
  };

  return (
    <section className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Agregar Nuevo Familiar</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-6 rounded-2xl shadow"
      >
        <input
          type="text"
          placeholder="Nombre"
          {...register('name', { required: 'Nombre es obligatorio' })}
          className="w-full p-2 border rounded-xl"
        />
        {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}

        <input
          type="number"
          placeholder="Edad"
          {...register('age', {
            required: 'Edad es obligatoria',
            min: { value: 0, message: 'Edad inválida' },
          })}
          className="w-full p-2 border rounded-xl"
        />
        {errors.edad && <p className="text-red-500 text-sm">{errors.edad.message}</p>}

        <input
          type="text"
          placeholder="Parentesco"
          {...register('parentesco', { required: 'Parentesco es obligatorio' })}
          className="w-full p-2 border rounded-xl"
        />
        {errors.parentesco && (
          <p className="text-red-500 text-sm">{errors.parentesco.message}</p>
        )}

        <input
          type="url"
          placeholder="URL de la foto"
          {...register('avatar')}
          className="w-full p-2 border rounded-xl"
        />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
        >
          Crear Familiar
        </button>
      </form>
    </section>
  );
};

export default FamiliarCreate;
