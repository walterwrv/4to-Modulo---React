
import { CartProvider } from "./context/CartContext";
import './App.css'
import { ThemeProvider } from "./context/ThemeContext";
import MainContent from "./components/MainContent";

function App() {
    
      
  
  return (
    <ThemeProvider>
      <CartProvider>
        <MainContent />
      </CartProvider>
    </ThemeProvider>
  )
}



export default App
