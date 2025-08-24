import ItemCard from './ItemCard';

const ItemList = ({ products, loading }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="empty-state">
        <h3>No se encontraron productos</h3>
        <p>Intenta con otra categoría o vuelve más tarde.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map(product => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;