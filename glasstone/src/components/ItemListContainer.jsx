import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory, getCategories } from '../data/products';
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
        if (categoryId) {
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
      return category ? `Categoría: ${category.name}` : 'Categoría';
    }
    return 'Todos los Productos';
  };

  const getMessage = () => {
    if (categoryId) {
      const category = categories.find(cat => cat.id === categoryId);
      return category 
        ? `Explora nuestra selección de ${category.name.toLowerCase()} (${category.count} productos)`
        : 'Productos filtrados por categoría';
    }
    return `Descubre nuestra colección completa de ${products.length} productos`;
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