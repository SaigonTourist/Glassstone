// Base de datos mock de productos
const products = [
    {
      id: 1,
      title: "Smartphone Galaxy Pro",
      price: 899.99,
      description: "Smartphone de última generación con cámara profesional y pantalla AMOLED de 6.8 pulgadas.",
      category: "tecnologia",
      image: "https://via.placeholder.com/400x300/6b7280/ffffff?text=Galaxy+Pro",
      stock: 15,
      features: ["128GB Storage", "Triple Camera", "5G Ready", "Wireless Charging"]
    },
    {
      id: 2,
      title: "Laptop UltraBook Air",
      price: 1299.99,
      description: "Laptop ultraliviana para profesionales con procesador de última generación y batería de larga duración.",
      category: "tecnologia",
      image: "https://via.placeholder.com/400x300/6b7280/ffffff?text=UltraBook+Air",
      stock: 8,
      features: ["Intel i7", "16GB RAM", "512GB SSD", "14 hours battery"]
    },
    {
      id: 3,
      title: "Auriculares Noise Pro",
      price: 299.99,
      description: "Auriculares con cancelación de ruido activa y sonido de alta fidelidad.",
      category: "tecnologia",
      image: "https://via.placeholder.com/400x300/6b7280/ffffff?text=Noise+Pro",
      stock: 25,
      features: ["Active Noise Cancelling", "30h Battery", "Bluetooth 5.0", "Premium Sound"]
    },
    {
      id: 4,
      title: "Zapatillas Running Elite",
      price: 159.99,
      description: "Zapatillas deportivas de alto rendimiento con tecnología de amortiguación avanzada.",
      category: "deportes",
      image: "https://via.placeholder.com/400x300/6b7280/ffffff?text=Running+Elite",
      stock: 30,
      features: ["Advanced Cushioning", "Breathable Mesh", "Lightweight", "Durable Sole"]
    },
    {
      id: 5,
      title: "Remera Fitness Premium",
      price: 49.99,
      description: "Remera deportiva con tecnología moisture-wicking para entrenamientos intensos.",
      category: "deportes",
      image: "https://via.placeholder.com/400x300/6b7280/ffffff?text=Fitness+Premium",
      stock: 50,
      features: ["Moisture-wicking", "Anti-odor", "Flexible Fit", "Quick Dry"]
    },
    {
      id: 6,
      title: "Mochila Adventure Pro",
      price: 89.99,
      description: "Mochila resistente al agua ideal para aventuras y actividades outdoor.",
      category: "deportes",
      image: "https://via.placeholder.com/400x300/6b7280/ffffff?text=Adventure+Pro",
      stock: 20,
      features: ["Waterproof", "35L Capacity", "Multiple Pockets", "Ergonomic Design"]
    },
    {
      id: 7,
      title: "Reloj Smart Fitness",
      price: 249.99,
      description: "Smartwatch con monitoreo de salud 24/7 y GPS integrado.",
      category: "tecnologia",
      image: "https://via.placeholder.com/400x300/6b7280/ffffff?text=Smart+Fitness",
      stock: 12,
      features: ["Heart Rate Monitor", "GPS Tracking", "Sleep Analysis", "Water Resistant"]
    },
    {
      id: 8,
      title: "Campera Outdoor Expedition",
      price: 199.99,
      description: "Campera impermeable y transpirable para actividades al aire libre.",
      category: "deportes",
      image: "https://via.placeholder.com/400x300/6b7280/ffffff?text=Expedition",
      stock: 18,
      features: ["Waterproof", "Breathable", "Wind Resistant", "Multiple Pockets"]
    }
  ];
  
  // Simular llamada async a API
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1500); // Simula 1.5 segundos de carga
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter(product => product.category === categoryId);
        resolve(filteredProducts);
      }, 1000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = products.find(product => product.id === parseInt(id));
        resolve(product);
      }, 800);
    });
  };
  
  // Obtener categorías únicas
  export const getCategories = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const categories = [
          { id: 'tecnologia', name: 'Tecnología', count: products.filter(p => p.category === 'tecnologia').length },
          { id: 'deportes', name: 'Deportes', count: products.filter(p => p.category === 'deportes').length }
        ];
        resolve(categories);
      }, 500);
    });
  };