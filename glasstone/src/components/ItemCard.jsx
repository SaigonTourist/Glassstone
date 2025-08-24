import { Link } from 'react-router-dom';

const ItemCard = ({ product }) => {
  return (
    <div className="product-card">
      {product.onSale && (
        <div className="sale-badge">
          -{product.discount}% OFF
        </div>
      )}
      
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.title}
          className="product-image-full"
        />
      </div>
      
      <div className="product-info">
        <h4 className="product-title">{product.title}</h4>
        <p className="product-description">
          {product.description.length > 80 
            ? `${product.description.substring(0, 80)}...` 
            : product.description
          }
        </p>
        
        <div className="product-footer">
          <div className="product-price-container">
            {product.onSale && product.originalPrice && (
              <div className="original-price">${product.originalPrice}</div>
            )}
            <div className="product-price">${product.price}</div>
          </div>
          <div className="product-stock">Stock: {product.stock}</div>
        </div>
        
        <Link to={`/item/${product.id}`} className="product-link">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;