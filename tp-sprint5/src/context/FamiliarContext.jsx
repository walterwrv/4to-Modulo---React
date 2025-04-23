// src/context/FamiliarContext.jsx
import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';



export const FamiliarContext = createContext();

export const FamiliarProvider = ({ children }) => {
  const [familiares, setFamiliares] = useState([]);


 // FamiliarContext.jsx
  const getFamiliares = async () => {
    try {
      const res = await api.get('/familiares');
      console.log('Datos recibidos:', res.data); // 👈 esto te ayuda a debuggear
      setFamiliares(res.data);
    } catch (error) {
      console.error('Error al obtener familiares:', error);
    }
  };

  const createFamiliar = async (data) => {
    try {
      const res = await api.post('/familiares', data);
      setFamiliares(prev => [...prev, res.data]); // 👈 Actualiza el estado local con el nuevo
      toast.success('Familiar creado con éxito 🎉');
    } catch (error) {
      toast.error('Error al crear el familiar');
      console.error(error);
    }
  };

  useEffect(() => {
    getFamiliares();
  }, []);

  return (
    <FamiliarContext.Provider value={{ familiares, setFamiliares, getFamiliares, createFamiliar }}>
      {children}
    </FamiliarContext.Provider>
  );
};