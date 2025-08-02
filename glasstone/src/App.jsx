import Navbar from './components/Navbar.jsx';
import Contenedor from './components/Contenedor.jsx';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-section">
        <Contenedor 
          titulo="Bienvenido a Glasstone"
          mensaje="Tu tienda online de confianza. Descubre productos únicos con la mejor calidad y atención al cliente."
        />
      </div>

      {/* Ejemplo de otro contenedor */}
      <div className="products-section">
        <Contenedor 
          titulo="Productos Destacados"
          mensaje="Explora nuestra selección especial de productos más populares"
        >
          <div className="product-grid">
            {/* Placeholder para productos */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="product-card">
                <div className="product-image"></div>
                <h4 className="product-title">Producto {item}</h4>
                <p className="product-description">Descripción del producto</p>
                <div className="product-price">$99.99</div>
              </div>
            ))}
          </div>
        </Contenedor>
      </div>
    </div>
  );
};

export default App;