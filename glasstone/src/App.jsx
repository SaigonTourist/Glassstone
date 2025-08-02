import React from 'react';
import Navbar from './components/Navbar.jsx';
import Contenedor from './components/Contenedor.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-16">
        <Contenedor 
          titulo="Bienvenido a Glasstone"
          mensaje="Tu tienda online de confianza. Descubre productos únicos con la mejor calidad y atención al cliente."
        />
      </div>

      {/* Ejemplo de otro contenedor */}
      <div className="py-8">
        <Contenedor 
          titulo="Productos Destacados"
          mensaje="Explora nuestra selección especial de productos más populares"
          className="bg-transparent"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Placeholder para productos */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-full h-32 bg-gray-200 rounded-lg mb-4"></div>
                <h4 className="font-medium text-gray-900 mb-2">Producto {item}</h4>
                <p className="text-gray-600 text-sm">Descripción del producto</p>
                <div className="mt-4">
                  <span className="text-lg font-bold text-gray-900">$99.99</span>
                </div>
              </div>
            ))}
          </div>
        </Contenedor>
      </div>
    </div>
  );
};

export default App;