import { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div className="item-count-container-premium">
      <div className="quantity-selector-premium">
        <button 
          className="quantity-btn-premium" 
          onClick={decrement}
          disabled={count <= 1}
        >
          <Minus size={18} />
        </button>
        
        <span className="quantity-display-premium">{count}</span>
        
        <button 
          className="quantity-btn-premium" 
          onClick={increment}
          disabled={count >= stock}
        >
          <Plus size={18} />
        </button>
      </div>

      <button 
        className="add-to-cart-btn-premium"
        onClick={handleAddToCart}
        disabled={stock === 0}
      >
        <ShoppingCart size={20} />
        Agregar al carrito
      </button>

      <div className="quantity-info-premium">
        <small>Máximo disponible: {stock}</small>
      </div>
    </div>
  );
};

export default ItemCount;