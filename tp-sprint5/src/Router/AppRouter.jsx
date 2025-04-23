import { Routes, Route, Navigate } from 'react-router-dom';
import FamiliarList from '../pages/FamiliarList';
import FamiliarDetail from '../pages/FamiliarDetail';
import FamiliarCreate from '../pages/FamiliarCreate';
import FamiliarEdit from '../pages/FamiliarEdit';
// import NotFound from '../pages/NotFound';

export const AppRouter = () => (
  <Routes>
    {/* <Route path="/" element={<h 1 className="text-center text-2xl">Bienvenido</h1>} /> */}
    <Route path="/" element={<FamiliarList />} />
    <Route path="/familiares/create" element={<FamiliarCreate />} />
    <Route path="/familiares/:id" element={<FamiliarDetail />} />
    <Route path="/familiares/:id/edit" element={<FamiliarEdit />} />
    {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
);
