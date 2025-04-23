import { AppRouter } from './Router/AppRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className='bg-gray-900'>
        <AppRouter />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
}

export default App;

