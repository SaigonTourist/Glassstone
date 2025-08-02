const Contenedor = ({ titulo, mensaje, children, className = "" }) => {
  return (
    <div className={`container ${className}`}>
      {/* Header del contenedor */}
      <div className="container-header">
        <h2 className="container-title">
          {titulo || "Bienvenido a Glasstone"}
        </h2>
        <p className="container-message">
          {mensaje || "Descubre nuestra colección exclusiva de productos de alta calidad"}
        </p>
      </div>

      {/* Contenido del contenedor */}
      <div className="container-content">
        {children || (
          <div className="placeholder">
            <div className="placeholder-icon">
              🛒
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