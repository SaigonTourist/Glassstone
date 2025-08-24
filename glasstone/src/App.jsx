import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';

// Componente para página 404
const NotFound = () => {
  return (
    <div className="container">
      <div className="container-header">
        <h2 className="container-title">Página no encontrada</h2>
        <p className="container-message">
          La página que buscas no existe o ha sido movida.
        </p>
      </div>
      <div className="container-content">
        <div className="empty-state">
          <div className="placeholder-icon">404</div>
          <h3 className="placeholder-title">¡Oops!</h3>
          <p className="placeholder-text">
            Parece que te perdiste. Vuelve al catálogo principal para seguir explorando.
          </p>
          <a href="/" className="back-link">Volver al inicio</a>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        
        <Routes>
          {/* Ruta principal - todos los productos */}
          <Route path="/" element={<ItemListContainer />} />
          
          {/* Ruta para categorías - productos filtrados */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          
          {/* Ruta para detalle de producto */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          
          {/* Ruta 404 - debe ir al final */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;