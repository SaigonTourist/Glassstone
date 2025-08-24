import { Mountain, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo y frase inspiradora */}
        <div className="footer-brand">
          <div className="footer-logo">
            <Mountain size={24} />
            <span className="footer-logo-text">
              Glass<span className="footer-logo-accent">tone</span>
            </span>
          </div>
          <p className="footer-quote">
            "El efecto del hombre en la tierra no es más que el viento en la piedra"
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="footer-links">
          <div className="footer-section">
            <h4>Productos</h4>
            <a href="/category/tecnologia">Tecnología</a>
            <a href="/category/indumentaria">Indumentaria</a>
            <a href="/category/ofertas">Ofertas</a>
          </div>
          
          <div className="footer-section">
            <h4>Empresa</h4>
            <a href="#">Sobre nosotros</a>
            <a href="#">Contacto</a>
            <a href="#">Blog</a>
          </div>
          
          <div className="footer-section">
            <h4>Soporte</h4>
            <a href="#">Ayuda</a>
            <a href="#">Envíos</a>
            <a href="#">Devoluciones</a>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="footer-divider"></div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-copyright">
            <span>© 2025 Glasstone. Todos los derechos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;