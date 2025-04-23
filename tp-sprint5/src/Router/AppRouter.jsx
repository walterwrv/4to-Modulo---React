import { Routes, Route } from 'react-router-dom';
import FamiliarList from '../pages/FamiliarList';
import FamiliarDetail from '../pages/FamiliarDetail';
import FamiliarCreate from '../pages/FamiliarCreate';
import FamiliarEdit from '../pages/FamiliarEdit';
import NotFound from '../pages/NotFound';

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<FamiliarList />} />
    <Route path="/familiares/create" element={<FamiliarCreate />} />
    <Route path="/familiares/:id" element={<FamiliarDetail />} />
    <Route path="/familiares/:id/edit" element={<FamiliarEdit />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
