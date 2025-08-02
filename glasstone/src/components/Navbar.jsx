import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(3);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div>
          <h1 className="logo">
            Glass<span className="logo-accent">tone</span>
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          <a href="#" className="nav-link" style={{ color: '#111827' }}>
            Inicio
          </a>
          <a href="#" className="nav-link" style={{ color: '#6b7280' }}>
            Productos
          </a>
          <a href="#" className="nav-link" style={{ color: '#6b7280' }}>
            Categorías
          </a>
          <a href="#" className="nav-link" style={{ color: '#6b7280' }}>
            Ofertas
          </a>
          <a href="#" className="nav-link" style={{ color: '#6b7280' }}>
            Contacto
          </a>
        </div>

        {/* Right side icons */}
        <div className="nav-icons">
          {/* Search */}
          <button className="icon-btn">
            🔍
          </button>

          {/* User */}
          <button className="icon-btn">
            👤
          </button>

          {/* Cart Widget */}
          <button className="icon-btn cart-badge">
            🛒
            {cartItems > 0 && (
              <span className="cart-count">
                {cartItems}
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="icon-btn"
            style={{ display: 'block' }}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Categorías</a>
          <a href="#">Ofertas</a>
          <a href="#">Contacto</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;