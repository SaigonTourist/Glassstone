import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems] = useState(5);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        document.getElementById('search-input')?.focus();
      }, 100);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      alert(`Buscando: "${searchTerm}"`);
      console.log(`Búsqueda: ${searchTerm}`);
      setSearchTerm('');
      setIsSearchOpen(false);
    }
  };

  const handleUserClick = () => {
    alert('¡Hiciste click en usuario! 👤');
    console.log('Usuario clickeado');
  };

  const handleCartClick = () => {
    alert(`¡Carrito clickeado! Tienes ${cartItems} productos 🛒`);
    console.log('Carrito clickeado');
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div>
          <Link to="/" className="logo">
            Glass<span className="logo-accent">tone</span>
          </Link>
        </div>

        
        <div className="nav-links">
          <Link 
            to="/" 
            className="nav-link" 
            style={{ color: isActiveLink('/') ? '#111827' : '#6b7280' }}
          >
            Inicio
          </Link>
          <Link 
            to="/category/tecnologia" 
            className="nav-link" 
            style={{ color: isActiveLink('/category/tecnologia') ? '#111827' : '#6b7280' }}
          >
            Tecnología
          </Link>
          <Link 
            to="/category/indumentaria" 
            className="nav-link" 
            style={{ color: isActiveLink('/category/indumentaria') ? '#111827' : '#6b7280' }}
          >
            Indumentaria
          </Link>
          <Link 
            to="/category/ofertas" 
            className="nav-link" 
            style={{ color: isActiveLink('/category/ofertas') ? '#111827' : '#6b7280' }}
          >
            Ofertas
          </Link>
          <a href="#" className="nav-link" style={{ color: '#6b7280' }}>
            Contacto
          </a>
        </div>

        {/* Icons */}
        <div className="nav-icons">
          {/* Buscar */}
          <button className="icon-btn" onClick={toggleSearch}>
            <Search size={20} />
          </button>

          {/* User */}
          <button className="icon-btn" onClick={handleUserClick}>
            <User size={20} />
          </button>

          {/* Carrito */}
          <button className="icon-btn cart-badge" onClick={handleCartClick}>
            <ShoppingCart size={20} />
            {cartItems > 0 && (
              <span className="cart-count">
                {cartItems}
              </span>
            )}
          </button>

          {/* Mobile boton */}
          <button
            onClick={toggleMenu}
            className="icon-btn"
            style={{ display: 'block' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="search-bar">
          <form onSubmit={handleSearch} className="search-form">
            <input
              id="search-input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar productos..."
              className="search-input"
            />
            <button type="submit" className="search-submit">
              <Search size={18} />
            </button>
            <button 
              type="button" 
              onClick={toggleSearch}
              className="search-close"
            >
              <X size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          <Link to="/category/tecnologia" onClick={() => setIsMenuOpen(false)}>Tecnología</Link>
          <Link to="/category/indumentaria" onClick={() => setIsMenuOpen(false)}>Indumentaria</Link>
          <Link to="/category/ofertas" onClick={() => setIsMenuOpen(false)}>Ofertas</Link>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Contacto</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;