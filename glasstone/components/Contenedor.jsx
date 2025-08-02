import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Contenedor = ({ titulo, mensaje, children, className = "" }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
      {/* Header del contenedor */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {titulo || "Bienvenido a Glasstone"}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {mensaje || "Descubre nuestra colección exclusiva de productos de alta calidad"}
        </p>
      </div>

      {/* Contenido del contenedor */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {children || (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <ShoppingCart size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Catálogo de Productos
            </h3>
            <p className="text-gray-500">
              Aquí se mostrarán los productos de tu tienda
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contenedor;