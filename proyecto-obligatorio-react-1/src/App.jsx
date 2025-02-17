import Body from './components/Body'
import NavBar from './components/NavBar'
import fondo from './assets/Fondo.webp'; // Ajusta la ruta según la estructura de tu proyecto


function App() {

  return (
    <>
      <div className="bg-cover bg-bottom relative min-h-screen overflow-hidden" style={{ backgroundImage: `url(${fondo})`}}>
        <NavBar/>
        <Body/>
      </div>
    </>
  )
}

export default App
