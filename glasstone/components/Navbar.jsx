import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(3); // Simula items para el carrito (preguntarle a mati de nuevo)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">
              Glass<span className="text-gray-600">tone</span>
            </h1>
          </div>

          {/* Desktop Navigation Links --los voy a cambiar mas adelante-- */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
                Inicio
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                Productos
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                Categorías
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                Ofertas
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                Contacto
              </a>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <Search size={20} />
            </button>

            {/* User Icon */}
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <User size={20} />
            </button>

            {/* Cart Widget */}
            <button className="relative text-gray-600 hover:text-gray-900 transition-colors">
              <ShoppingCart size={20} />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a href="#" className="text-gray-900 block px-3 py-2 text-base font-medium">
                Inicio
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Productos
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Categorías
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Ofertas
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;