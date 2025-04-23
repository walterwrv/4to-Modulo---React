import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Página no encontrada</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Volver al inicio
      </Link>
    </section>
  );
};

export default NotFound;
