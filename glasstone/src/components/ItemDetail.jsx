import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Shield, Truck, RotateCcw, Heart, Share2, Eye, Award, Zap } from 'lucide-react';
import ItemCount from './ItemCount';

const ItemDetail = ({ product, loading }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (loading) {
    return (
      <div className="detail-loading-premium">
        <div className="loading-skeleton-premium">
          <div className="skeleton-gallery">
            <div className="skeleton-main-image"></div>
            <div className="skeleton-thumbnails">
              {[1,2,3].map(i => <div key={i} className="skeleton-thumb"></div>)}
            </div>
          </div>
          <div className="skeleton-content-premium">
            <div className="skeleton-badge"></div>
            <div className="skeleton-title-large"></div>
            <div className="skeleton-rating"></div>
            <div className="skeleton-price-large"></div>
            <div className="skeleton-stock"></div>
            <div className="skeleton-description"></div>
            <div className="skeleton-features">
              {[1,2,3,4].map(i => <div key={i} className="skeleton-feature"></div>)}
            </div>
            <div className="skeleton-actions"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="detail-not-found-premium">
        <div className="not-found-content-premium">
          <div className="not-found-animation">
            <div className="search-icon-animated">🔍</div>
          </div>
          <h2>Producto no encontrado</h2>
          <p>El producto que buscas no existe o ya no está disponible.</p>
          <Link to="/" className="btn-primary-premium">
            <ArrowLeft size={18} />
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = (quantity) => {
    console.log(`Agregado al carrito: ${product.title} - Cantidad: ${quantity}`);
    
    // Animación de éxito más elaborada
    const btn = document.querySelector('.add-to-cart-btn');
    btn.classList.add('btn-success-animation');
    
    setTimeout(() => {
      btn.classList.remove('btn-success-animation');
    }, 1000);
    
    // Crear notificación flotante
    createSuccessNotification(product.title, quantity);
  };

  const createSuccessNotification = (productTitle, quantity) => {
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
      <div class="notification-icon">✓</div>
      <div class="notification-content">
        <strong>¡Agregado al carrito!</strong>
        <p>${productTitle} (${quantity})</p>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Micro-animación del corazón
    const heart = document.querySelector('.favorite-btn-premium');
    heart.style.transform = 'scale(1.3)';
    setTimeout(() => heart.style.transform = 'scale(1)', 200);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace copiado al portapapeles!');
    }
  };

  // Simular múltiples imágenes y datos adicionales
  const productImages = [product.image, product.image, product.image, product.image];
  const rating = 4.2;
  const reviewCount = 127;
  const viewCount = 2547;

  return (
    <div className={`item-detail-wrapper-premium ${isVisible ? 'fade-in' : ''}`}>
      {/* Breadcrumb con animación */}
      <div className="breadcrumb-premium">
        <Link to="/" className="breadcrumb-link-premium">
          <ArrowLeft size={16} />
          Inicio
        </Link>
        <span className="breadcrumb-separator-premium">›</span>
        <Link to={`/category/${product.category}`} className="breadcrumb-link-premium">
          {product.category === 'tecnologia' ? 'Tecnología' : 'Indumentaria'}
        </Link>
        <span className="breadcrumb-separator-premium">›</span>
        <span className="breadcrumb-current-premium">{product.title}</span>
      </div>

      <div className="item-detail-premium">
        {/* Galería premium */}
        <div className="product-gallery-premium">
          <div className="main-image-premium">
            <img src={productImages[selectedImage]} alt={product.title} />
            <div className="image-overlay">
              <button className="favorite-btn-premium" onClick={toggleFavorite}>
                <Heart 
                  size={20} 
                  fill={isFavorite ? '#111827' : 'none'} 
                  color={isFavorite ? '#111827' : '#6b7280'}
                  strokeWidth={2}
                />
              </button>
              <button className="share-btn-premium" onClick={handleShare}>
                <Share2 size={20} color="#fff" />
              </button>
            </div>
            <div className="image-badge">
              <Eye size={14} />
              {viewCount.toLocaleString()} vistas
            </div>
          </div>
          
          <div className="thumbnails-premium">
            {productImages.map((img, index) => (
              <button
                key={index}
                className={`thumbnail-premium ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`${product.title} ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Información premium */}
        <div className="product-info-premium">
          {/* Header con badges */}
          <div className="product-header-premium">
            <div className="badges-container">
              <div className="category-badge-premium">
                {product.category === 'tecnologia' ? '📱 Tecnología' : '⚽ Deportes'}
              </div>
              {product.stock <= 5 && (
                <div className="urgency-badge">🔥 ¡Últimas unidades!</div>
              )}
              <div className="bestseller-badge">
                <Award size={14} />
                Más vendido
              </div>
            </div>
            
            <h1 className="product-title-premium">{product.title}</h1>
            
            <div className="product-meta">
              <div className="rating-premium">
                <div className="stars-premium">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < Math.floor(rating) ? '#fbbf24' : 'none'} 
                      color="#fbbf24" 
                    />
                  ))}
                </div>
                <span className="rating-text-premium">{rating} ({reviewCount.toLocaleString()} reseñas)</span>
              </div>
              
              <div className="product-stats">
                <span className="stat-item">
                  <Zap size={14} />
                  Envío express disponible
                </span>
              </div>
            </div>
          </div>

          {/* Precio premium */}
          <div className="pricing-section-premium">
            <div className="price-main">${product.price}</div>
            <div className="price-details-premium">
              <span className="original-price-premium">${(product.price * 1.25).toFixed(2)}</span>
              <div className="discount-info">
                <span className="discount-badge-premium">-20% OFF</span>
                <span className="savings-text">Ahorras ${((product.price * 1.25) - product.price).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="payment-options">
              <div className="installments">💳 Hasta 12 cuotas sin interés</div>
              <div className="payment-methods">
                <span>Aceptamos:</span>
                <div className="payment-icons">💳 🏦 📱</div>
              </div>
            </div>
          </div>

          {/* Stock premium */}
          <div className="stock-section-premium">
            <div className={`stock-indicator-premium ${product.stock > 5 ? 'high-stock' : product.stock > 0 ? 'low-stock' : 'no-stock'}`}>
              <div className="stock-bar">
                <div className="stock-fill" style={{width: `${Math.min(product.stock / 10 * 100, 100)}%`}}></div>
              </div>
              <span>{product.stock > 0 ? `${product.stock} disponibles` : 'Sin stock'}</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="info-tabs-premium">
            <div className="tab-buttons">
              <button 
                className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Descripción
              </button>
              <button 
                className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                onClick={() => setActiveTab('features')}
              >
                Características
              </button>
              <button 
                className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reseñas ({reviewCount})
              </button>
            </div>
            
            <div className="tab-content">
              {activeTab === 'description' && (
                <div className="tab-pane description-pane">
                  <p>{product.description}</p>
                  <div className="description-highlights">
                    <div className="highlight-item">✨ Calidad premium garantizada</div>
                    <div className="highlight-item">🚚 Envío gratis en compras +$100</div>
                    <div className="highlight-item">🔄 Devolución fácil 30 días</div>
                  </div>
                </div>
              )}
              
              {activeTab === 'features' && (
                <div className="tab-pane features-pane">
                  <div className="features-grid-premium">
                    {product.features?.map((feature, index) => (
                      <div key={index} className="feature-card-premium">
                        <div className="feature-icon-premium">✨</div>
                        <span>{feature}</span>
                      </div>
                    )) || [
                      <div key="1" className="feature-card-premium">
                        <div className="feature-icon-premium">🔥</div>
                        <span>Alta calidad</span>
                      </div>,
                      <div key="2" className="feature-card-premium">
                        <div className="feature-icon-premium">⚡</div>
                        <span>Tecnología avanzada</span>
                      </div>
                    ]}
                  </div>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div className="tab-pane reviews-pane">
                  <div className="reviews-summary">
                    <div className="rating-breakdown">
                      <div className="rating-large">{rating}</div>
                      <div className="rating-details">
                        <div className="stars-large">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={20} fill={i < Math.floor(rating) ? '#fbbf24' : 'none'} color="#fbbf24" />
                          ))}
                        </div>
                        <div className="review-count">Basado en {reviewCount} reseñas</div>
                      </div>
                    </div>
                  </div>
                  <div className="sample-reviews">
                    <div className="review-item">
                      <div className="reviewer">⭐⭐⭐⭐⭐ María G.</div>
                      <p>"Excelente producto, superó mis expectativas. Totalmente recomendado."</p>
                    </div>
                    <div className="review-item">
                      <div className="reviewer">⭐⭐⭐⭐⭐ Carlos M.</div>
                      <p>"Calidad premium, llegó rápido y en perfectas condiciones."</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Servicios premium */}
          <div className="services-premium">
            <div className="service-card">
              <Shield size={24} />
              <div>
                <strong>Garantía extendida</strong>
                <p>12 meses de cobertura total</p>
              </div>
            </div>
            <div className="service-card">
              <Truck size={24} />
              <div>
                <strong>Envío express</strong>
                <p>Gratis en 24-48h</p>
              </div>
            </div>
            <div className="service-card">
              <RotateCcw size={24} />
              <div>
                <strong>Cambios fáciles</strong>
                <p>30 días sin preguntas</p>
              </div>
            </div>
          </div>

          {/* Acciones de compra premium */}
          {product.stock > 0 && (
            <div className="purchase-section-premium">
              <ItemCount 
                stock={product.stock}
                initial={1}
                onAdd={handleAddToCart}
              />
              <div className="purchase-options">
                <button className="btn-buy-now">
                  <Zap size={18} />
                  Comprar ahora
                </button>
              </div>
            </div>
          )}

          {product.stock === 0 && (
            <div className="out-of-stock-premium">
              <button className="btn-notify-premium">
                📧 Notificarme cuando esté disponible
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;