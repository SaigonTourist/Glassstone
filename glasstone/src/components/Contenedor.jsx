import { ShoppingCart } from 'lucide-react';

const Contenedor = ({ titulo, mensaje, children, className = "" }) => {
  return (
    <div className={`container ${className}`}>
      {/* Header */}
      <div className="container-header">
        <h2 className="container-title">
          {titulo || "Glasstone - Alpinismo Profesional"}
        </h2>
        <p className="container-message">
          {mensaje || "Equipamiento técnico de alta calidad para alpinistas profesionales y expediciones de montaña"}
        </p>
      </div>

      {/* Contenido */}
      <div className="container-content">
        {children || (
          <div className="placeholder">
            <div className="placeholder-icon">
              <ShoppingCart size={48} color="#6b7280" />
            </div>
            <h3 className="placeholder-title">
              Catálogo de Productos
            </h3>
            <p className="placeholder-text">
              Aquí se mostrarán los productos de tu tienda
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contenedor;