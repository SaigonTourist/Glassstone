import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { searchProducts } from '../data/products';
import ItemList from './ItemList';
import Contenedor from './Contenedor';

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTerm } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchTerm || searchTerm.trim() === '') {
      navigate('/');
      return;
    }

    setLoading(true);
    
    const performSearch = async () => {
      try {
        const results = await searchProducts(searchTerm);
        setProducts(results);
      } catch (error) {
        console.error('Error en búsqueda:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    performSearch();
  }, [searchTerm, navigate]);

  const getTitle = () => {
    if (loading) return 'Buscando...';
    return `Resultados para "${searchTerm}"`;
  };

  const getMessage = () => {
    if (loading) return 'Buscando productos especializados en alpinismo...';
    
    if (products.length === 0) {
      return 'No se encontraron productos. Intenta con otros términos como GPS, chaquetas o cascos.';
    }
    
    return `Encontramos ${products.length} producto${products.length === 1 ? '' : 's'} que coincide${products.length === 1 ? '' : 'n'} con tu búsqueda`;
  };

  return (
    <div className="search-results-page">
      <Contenedor 
        titulo={getTitle()}
        mensaje={getMessage()}
      >
        {!loading && products.length === 0 ? (
          <div className="search-suggestions">
            <h3>💡 Sugerencias de búsqueda:</h3>
            <div className="search-tips">
              <div className="search-tip">
                <strong>🔧 Tecnología:</strong> GPS, altímetro, radio, detector, garmin
              </div>
              <div className="search-tip">
                <strong>👕 Indumentaria:</strong> chaqueta, botas, guantes, casco, mochila
              </div>
              <div className="search-tip">
                <strong>🏷️ Marcas:</strong> Garmin, Arc'teryx, Petzl, Patagonia, Osprey
              </div>
              <div className="search-tip">
                <strong>⭐ Características:</strong> resistente, impermeable, ultraligero, gore-tex
              </div>
            </div>
          </div>
        ) : (
          <ItemList products={products} loading={loading} />
        )}
      </Contenedor>
    </div>
  );
};

export default SearchResults;