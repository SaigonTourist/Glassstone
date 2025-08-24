import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems] = useState(3);
  const location = useLocation();
  const navigate = useNavigate();

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
      // Por ahora solo mostramos una alerta, después implementaremos búsqueda real
      alert(`Buscando: "${searchTerm}"`);
      console.log(`Búsqueda: ${searchTerm}`);
      setSearchTerm('');
      setIsSearchOpen(false);
    }
  };

  const handleUserClick = () => {
    // Por ahora solo mostramos una alerta, después implementaremos autenticación
    alert('Función de usuario próximamente disponible');
    console.log('Acceso a perfil de usuario');
  };

  const handleCartClick = () => {
    // Por ahora solo mostramos una alerta, después implementaremos carrito real
    alert(`Tienes ${cartItems} productos en el carrito`);
    console.log('Acceso al carrito');
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

        {/* Desktop Navigation Links */}
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
            to="/category/deportes" 
            className="nav-link" 
            style={{ color: isActiveLink('/category/deportes') ? '#111827' : '#6b7280' }}
          >
            Deportes
          </Link>
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
            <Search size={20} />
          </button>

          {/* User */}
          <button className="icon-btn">
            <User size={20} />
          </button>

          {/* Cart Widget */}
          <button className="icon-btn cart-badge">
            <ShoppingCart size={20} />
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
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          <Link to="/category/tecnologia" onClick={() => setIsMenuOpen(false)}>Tecnología</Link>
          <Link to="/category/deportes" onClick={() => setIsMenuOpen(false)}>Deportes</Link>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Ofertas</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Contacto</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;