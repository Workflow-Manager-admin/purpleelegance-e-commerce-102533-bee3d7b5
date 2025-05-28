import React from 'react';
import './App.css';

// PUBLIC_INTERFACE
/**
 * ProductCard displays a luxury cosmetic product with a real royalty-free image and premium info.
 */
function ProductCard({ product }) {
  return (
    <div className="product-card" tabIndex={0} aria-label={`Luxury cosmetic product: ${product.name}`}>
      <div className="product-image shimmering">
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            objectFit: 'cover',
            filter: 'drop-shadow(0 4px 16px #aeaba3c7)',
            background: 'transparent',
            zIndex: 3,
          }}
        />
      </div>
      <div className="product-details">
        <div className="product-name">{product.name}</div>
        <div className="product-tagline">{product.description}</div>
        <div style={{fontWeight:700, color:'var(--luxury-accent)', margin: '5px 0'}}>
          {product.price}
        </div>
        <button className="btn btn-small" aria-label={`View details of ${product.name}`}>View</button>
      </div>
    </div>
  );
}

// Royalty-free mock products array
const DEMO_PRODUCTS = [
  {
    id: 1,
    name: 'Radiant Glow Foundation',
    description: 'A lightweight, long-wear liquid foundation with flawless coverage.',
    price: '$42',
    image: 'https://images.unsplash.com/photo-1512499617640-c2f999098c30?auto=format&fit=facearea&w=400&q=80',
    category: 'Foundation'
  },
  {
    id: 2,
    name: 'Velvet Shadows Palette',
    description: 'Ten richly pigmented eyeshadows for day-to-night looks.',
    price: '$58',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&q=80',
    category: 'Eyeshadow'
  },
  {
    id: 3,
    name: 'Luxe Matte Lipstick',
    description: 'Vibrant, hydrating matte lipstick for a stunning pout.',
    price: '$29',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80',
    category: 'Lipstick'
  },
  {
    id: 4,
    name: 'Hydraplush Moisturizer',
    description: 'Premium daily moisturizer for luminous, healthy skin.',
    price: '$64',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=facearea&w=400&q=80',
    category: 'Skincare'
  }
];

// PUBLIC_INTERFACE
/**
 * ProductCatalog renders a visually luxurious grid of real product cards.
 */
function ProductCatalog() {
  return (
    <section className="featured-products" id="catalog">
      <h2 className="section-title">Featured Products</h2>
      <div className="products-grid">
        {DEMO_PRODUCTS.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

// PUBLIC_INTERFACE
function ProductSearchFilter() {
  /** Placeholder for search/filter UI, visually styled as disabled */
  return (
    <section className="filters-bar" aria-label="Product search and filters">
      <input className="filter-input" type="text" placeholder="Search products..." disabled />
      <select className="filter-select" disabled>
        <option>Category</option>
      </select>
    </section>
  );
}

// PUBLIC_INTERFACE
function Wishlist() {
  /** Styled wishlist section (not functional in demo) */
  return (
    <aside className="wishlist" id="wishlist" aria-label="Wishlist area">
      <span className="wishlist-title">Wishlist</span>
      <div className="wishlist-items" style={{ color: "#b188ce" }}>Sign in to save your favorite products ♥</div>
    </aside>
  );
}

// PUBLIC_INTERFACE
function CheckoutSection() {
  /** Styled checkout area, non-interactive placeholder */
  return (
    <section className="checkout-section" id="checkout" aria-label="Checkout area">
      <button className="btn btn-large" disabled>Proceed to Checkout</button>
      <span className="checkout-caption">(Checkout is not enabled in this demo)</span>
    </section>
  );
}

// PUBLIC_INTERFACE
function CustomerReviews() {
  /** Demo customer reviews using visually realistic style */
  const reviews = [
    {
      user: "Sophie L.",
      content: "Absolutely in love with the Radiant Glow Foundation – the coverage is flawless and lasts all day!",
      stars: 5,
    },
    {
      user: "Maya R.",
      content: "Velvet Shadows Palette has the smoothest texture I've ever tried. Gorgeous colors!",
      stars: 5,
    },
    {
      user: "Claire F.",
      content: "The Hydraplush Moisturizer makes my skin feel so soft. Packaging is so elegant too!",
      stars: 4,
    },
  ];
  return (
    <section className="customer-reviews" aria-label="Customer reviews">
      <div className="review-title">Customer Reviews</div>
      {reviews.map((review, i) => (
        <div key={i} style={{ margin: "10px 0 18px 0", paddingBottom: 6, borderBottom: "1px solid #e9e5ee0d" }}>
          <span style={{
            fontWeight: 600,
            color: "var(--luxury-primary)",
            fontFamily: "var(--font-secondary)",
            fontSize: "1rem",
          }}>{'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}</span>
          <div className="review-placeholder" style={{ marginTop: 0, color: "#6C3483" }}>{review.content}</div>
          <span style={{ color: "var(--luxury-secondary)", fontSize: "0.98rem" }}>– {review.user}</span>
        </div>
      ))}
    </section>
  );
}

// PUBLIC_INTERFACE
function Footer() {
  /** Elegant luxury-themed footer with links and branding */
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div className="footer-brand">
          <span className="logo-symbol">💎</span> Luxe Purple Cosmetics
        </div>
        <div className="footer-links">
          <a href="#catalog" tabIndex={0}>Shop</a>
          <a href="#wishlist" tabIndex={0}>Wishlist</a>
          <a href="#checkout" tabIndex={0}>Checkout</a>
        </div>
        <div className="footer-meta">
          &copy; {new Date().getFullYear()} PurpleElegance &mdash; All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

// PUBLIC_INTERFACE
function App() {
  // Visually rich luxury e-commerce homepage layout
  return (
    <div className="app">
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="container navbar-row">
          <div className="logo" tabIndex={0} aria-label="Luxe Purple Cosmetics Home">
            <span className="logo-symbol" aria-hidden="true">💎</span>
            Luxe Purple Cosmetics
          </div>
          <ul className="nav-links" role="menubar">
            <li><a href="#home" tabIndex={0} role="menuitem" aria-label="Home">Home</a></li>
            <li><a href="#catalog" tabIndex={0} role="menuitem" aria-label="Catalog">Catalog</a></li>
            <li><a href="#wishlist" tabIndex={0} role="menuitem" aria-label="Wishlist">Wishlist</a></li>
            <li><a href="#checkout" tabIndex={0} role="menuitem" aria-label="Checkout">Checkout</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <div className="container">
          <section className="hero" id="home" tabIndex={0} aria-label="Luxury hero section">
            <div className="subtitle">Unveil Your Elegance</div>
            <h1 className="title">Luxe Purple Cosmetics</h1>
            <div className="description">
              Experience luxury and beauty redefined. Explore our world-class collection of high-end cosmetics and skincare, curated for those who demand exclusivity and sophistication.
            </div>
            {/* Hero feature image */}
            <div style={{
              width: '148px', 
              height: '148px', 
              borderRadius: '50%', 
              margin: '24px auto 0 auto',
              boxShadow: '0 7px 44px 0 rgba(174,171,163,0.19)',
              background: 'linear-gradient(115deg, #d2b4de2a 50%, #aeaba3 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=facearea&w=320&q=80"
                alt="Luxury cosmetics arranged in a flatlay"
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  boxShadow: '0 1.5px 8px 0 rgba(174,171,163,0.08)',
                }}
              />
            </div>
            <a href="#catalog" className="btn btn-large hero-cta" aria-label="Shop Now">
              Shop Now
            </a>
          </section>

          <ProductSearchFilter />
          <ProductCatalog />
          <Wishlist />
          <CheckoutSection />
          <CustomerReviews />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
