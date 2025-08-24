const products = [
  // TECNOLOGÍA
  {
    id: 1,
    title: "GPS Garmin GPSMAP 67i",
    price: 649.99,
    originalPrice: 799.99,
    description: "GPS resistente con comunicación satelital bidireccional inReach, ideal para expediciones en alta montaña y rescates de emergencia.",
    category: "tecnologia",
    image: "https://www.mountainexperience.it/48886-medium_default/7919-garmin-gpsmap-67i.jpg",
    stock: 3,
    onSale: true,
    discount: 19,
    features: ["Comunicación satelital", "Batería 180h", "Resistente IPX7", "Mapas topográficos", "SOS de emergencia"]
  },
  {
    id: 2,
    title: "Altímetro Suunto Core Alpine",
    price: 299.99,
    description: "Reloj multifunción con altímetro, barómetro, brújula y predicción meteorológica para alpinismo técnico.",
    category: "tecnologia",
    image: "https://www.suunto.com/globalassets/productimages/suunto-core-alpine-edition/suunto-core-alpine-edition-3248.png?height=900&format=jpg",
    stock: 15,
    onSale: false,
    features: ["Altímetro preciso", "Barómetro", "Brújula digital", "Resistente -20°C", "Alarma tormenta"]
  },
  {
    id: 3,
    title: "Radio Motorola T800 Two-Way",
    price: 189.99,
    originalPrice: 249.99,
    description: "Radio bidireccional de largo alcance para comunicación en expediciones, con resistencia extrema y batería extendida.",
    category: "tecnologia",
    image: "https://cdn11.bigcommerce.com/s-b3485v/images/stencil/350x350/products/723/2260/T200_2-Pack_Website_Final__59563.1490210543.jpg?c=2",
    stock: 20,
    onSale: true,
    discount: 24,
    features: ["Alcance 56km", "35 canales GMRS", "Resistente IP67", "Batería 23h", "Alerta meteorológica"]
  },
  {
    id: 4,
    title: "Detector de Avalanchas Ortovox Zoom+",
    price: 329.99,
    description: "ARVA digital de última generación con procesamiento de señal inteligente y búsqueda por señal analógica.",
    category: "tecnologia",
    image: "https://sherpagranada.com/4284-large_default/ortovox-avalanche-zoom.jpg",
    stock: 12,
    onSale: false,
    features: ["Búsqueda inteligente", "Alcance 60m", "3 antenas", "Display OLED", "Auto-test diario"]
  },

  // INDUMENTARIA
  {
    id: 5,
    title: "Chaqueta Arc'teryx Alpha SV",
    price: 599.99,
    originalPrice: 749.99,
    description: "Chaqueta hardshell de alpinismo con tecnología GORE-TEX Pro, diseñada para condiciones extremas de alta montaña.",
    category: "indumentaria",
    image: "https://cdna.lystit.com/1040/1300/n/photos/farfetch/26508443/arcteryx-green-Alpha-Sv-Jacke.jpeg",
    stock: 6,
    onSale: true,
    discount: 20,
    features: ["GORE-TEX Pro", "Costuras selladas", "Capucha compatible casco", "Resistente abrasión", "Ventilación pit-zip"]
  },
  {
    id: 6,
    title: "Pantalón Patagonia Triolet",
    price: 449.99,
    description: "Pantalón hardshell para alpinismo técnico con H2No Performance Standard y refuerzos en zonas críticas.",
    category: "indumentaria",
    image: "https://cdn.barrabes.com/product/XLarge/1196464_3.jpg",
    stock: 10,
    onSale: false,
    features: ["H2No Performance", "Refuerzos Cordura", "Ventilación lateral", "Ajuste sobre botas", "Suspensores removibles"]
  },
  {
    id: 7,
    title: "Botas La Sportiva G2 SM",
    price: 719.99,
    originalPrice: 899.99,
    description: "Botas de alpinismo técnico de doble bota para expediciones en alta altitud y condiciones extremas de frío.",
    category: "indumentaria",
    image: "https://tatoo.ws/cache/z/article/22209/92608.jpg",
    stock: 4,
    onSale: true,
    discount: 20,
    features: ["Doble bota", "Resistente -40°C", "Compatible crampones", "Carbono Grilamid", "Gaiter integrado"]
  },
  {
    id: 8,
    title: "Guantes Black Diamond Guide",
    price: 129.99,
    description: "Guantes técnicos de alpinismo con palma de cuero y aislamiento PrimaLoft para destreza y calidez.",
    category: "indumentaria",
    image: "https://www.bergfuchs.at/media/catalog/product/b/l/black-diamond-guide-gloves-skihandschuh_6_1.jpg",
    stock: 25,
    onSale: false,
    features: ["PrimaLoft Gold", "Palma cuero cabra", "Puños ajustables", "Compatible pantalla táctil", "Correa muñeca"]
  },
  {
    id: 9,
    title: "Casco Petzl Meteor",
    price: 67.99,
    originalPrice: 89.99,
    description: "Casco ultraligero de alpinismo con excelente ventilación y compatibilidad total con linternas frontales.",
    category: "indumentaria",
    image: "https://glisshop-glisshop-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/735/735/6f8c91c10a429abf83acc938ccd9bdd2fffedf89_H20PETZACC12045477_PETZ0289251_0.jpeg",
    stock: 18,
    onSale: true,
    discount: 24,
    features: ["Ultraligero 240g", "Ventilación optimizada", "Compatible frontales", "Ajuste Omega", "EN 12492"]
  },
  {
    id: 10,
    title: "Mochila Osprey Mutant 52",
    price: 259.99,
    description: "Mochila técnica de alpinismo con sistema de carga dinámica y múltiples puntos de anclaje para material técnico.",
    category: "indumentaria",
    image: "https://images.hardloop.fr/989384/osprey-mutant-52-mochila-alpinismo.jpg?w=auto&h=auto&q=80",
    stock: 14,
    onSale: false,
    features: ["52L capacidad", "Sistema LightWire", "Compatible hidratación", "Porta piolets", "Acceso frontal"]
  }
];

// Simular llamada async a API
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
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

// Productos en oferta
export const getSaleProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const saleProducts = products.filter(product => product.onSale === true);
      resolve(saleProducts);
    }, 1000);
  });
};

// Categorías únicas
export const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const categories = [
        { 
          id: 'tecnologia', 
          name: 'Tecnología', 
          count: products.filter(p => p.category === 'tecnologia').length,
          description: 'Equipamiento técnico para alpinismo profesional'
        },
        { 
          id: 'indumentaria', 
          name: 'Indumentaria', 
          count: products.filter(p => p.category === 'indumentaria').length,
          description: 'Vestimenta técnica para condiciones extremas'
        },
        { 
          id: 'ofertas', 
          name: 'Ofertas', 
          count: products.filter(p => p.onSale === true).length,
          description: 'Productos con descuentos especiales'
        }
      ];
      resolve(categories);
    }, 500);
  });
};