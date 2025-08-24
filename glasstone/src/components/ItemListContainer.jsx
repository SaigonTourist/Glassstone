import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory, getSaleProducts, getCategories } from '../data/products';
import ItemList from './ItemList';
import Contenedor from './Contenedor';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    // Cargar productos según la categoría
    const loadProducts = async () => {
      try {
        let productsData;
        if (categoryId === 'ofertas') {
          productsData = await getSaleProducts();
        } else if (categoryId) {
          productsData = await getProductsByCategory(categoryId);
        } else {
          productsData = await getProducts();
        }
        setProducts(productsData);
      } catch (error) {
        console.error('Error loading products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    // Cargar categorías
    const loadCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };

    loadProducts();
    loadCategories();
  }, [categoryId]);

  const getTitle = () => {
    if (categoryId) {
      const category = categories.find(cat => cat.id === categoryId);
      return category ? `${category.name}` : 'Categoría';
    }
    return 'Equipamiento de Alpinismo';
  };

  const getMessage = () => {
    if (categoryId) {
      const category = categories.find(cat => cat.id === categoryId);
      return category 
        ? `${category.description} (${category.count} productos disponibles)`
        : 'Productos especializados para alpinismo profesional';
    }
    return `Equipamiento técnico profesional para alpinismo y alta montaña (${products.length} productos)`;
  };

  return (
    <Contenedor 
      titulo={getTitle()}
      mensaje={getMessage()}
    >
      <ItemList products={products} loading={loading} />
    </Contenedor>
  );
};

export default ItemListContainer;