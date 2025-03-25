import React from 'react'
import { useContext } from "react";

import ProductList from './ProductList';
import ThemeButton from './ThemeButton';
import Cart from './Cart';
import { ThemeContext } from '../context/ThemeContext';


const MainContent = () => {
    const { theme } = useContext(ThemeContext);
  
    return (
      <div className={`min-h-screen p-6 transition-colors duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
        <ThemeButton />
        <h1 className="text-3xl font-bold mb-6">Tienda Online</h1>
        <ProductList />
        <Cart />
      </div>
    );
  };

export default MainContent