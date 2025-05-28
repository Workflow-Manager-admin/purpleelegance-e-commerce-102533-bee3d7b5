import React from 'react';
import './App.css';

// PUBLIC_INTERFACE
/**
 * ProductCard displays a luxury cosmetic product using a real royalty-free image and premium styling.
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
        <div className="product-tagline">{product.tagline}</div>
        <button className="btn btn-small" aria-label={`View details of ${product.name}`}>View</button>
      </div>
    </div>
  );
}

// Sample demo product images (royalty-free from Unsplash and Pexels)
const DEMO_PRODUCTS = [
  {
    id: 1,
    name: "Radiant Veil Foundation",
    tagline: "Full-Coverage | 18 Shades",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&q=80",
    category: "Foundation",
  },
  {
    id: 2,
    name: "Opulent Rose Lipstick",
    tagline: "Satin Finish | Long-Lasting",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80",
    category: "Lipstick",
  },
  {
    id: 3,
    name: "Velvet Luxe Eyeshadow",
    tagline: "12-Color Palette",
    image: "https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&w=400&q=80",
    category: "Eyeshadow",
  },
  {
    id: 4,
    name: "Crystal Dew Serum",
    tagline: "Hydrating | All Skin Types",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&q=80",
    category: "Skincare",
  },
  {
    id: 5,
    name: "Illuminist Highlighter",
    tagline: "Glow | Ultra-Fine Powder",
    image: "https://images.pexels.com/photos/2064346/pexels-photo-2064346.jpeg?auto=compress&w=400&q=80",
    category: "Highlighter",
  },
  {
    id: 6,
    name: "SilkTouch Setting Spray",
    tagline: "24h Hold | Non-Sticky",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&q=80",
    category: "Setting Spray",
  },
];

/**
 * ProductCatalog renders a grid of featured product cards with real images and luxury-themed info.
 */
// PUBLIC_INTERFACE
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
  /** Placeholder for search/filter UI */
  return (
    <section className="filters-bar" aria-label="Product search and filters">
      <input className="filter-input" type="text" placeholder="Search luxury products..." disabled />
      <select className="filter-select" disabled>
        <option>Category</option>
      </select>
    </section>
  );
}

// PUBLIC_INTERFACE
function Wishlist() {
  /** Placeholder for wishlist, but styled for a premium experience */
  return (
    <aside className="wishlist" id="wishlist" aria-label="Wishlist area">
      <span className="wishlist-title">Wishlist</span>
      <div className="wishlist-items" style={{color: "#b188ce"}}>Sign in to save your favorite products ♥</div>
    </aside>
  );
}

// PUBLIC_INTERFACE
function CheckoutSection() {
  /** Placeholder for checkout section, styled for premium look */
  return (
    <section className="checkout-section" id="checkout" aria-label="Checkout area">
      <button className="btn btn-large" disabled>Proceed to Checkout</button>
      <span className="checkout-caption">(Checkout is not enabled in this demo)</span>
    </section>
  );
}

// PUBLIC_INTERFACE
function CustomerReviews() {
  /** Demo customer reviews to make section visually functional */
  const reviews = [
    {
      user: "Sophie L.",
      content: "Absolutely in love with the Radiant Veil Foundation – the coverage is flawless and lasts all day!",
      stars: 5,
    },
    {
      user: "Maya R.",
      content: "Velvet Luxe Eyeshadow has the smoothest texture I've ever tried. Gorgeous colors!",
      stars: 5,
    },
    {
      user: "Claire F.",
      content: "The Crystal Dew Serum makes my skin feel so soft. Packaging is so elegant too!",
      stars: 4,
    },
  ];
  return (
    <section className="customer-reviews" aria-label="Customer reviews">
      <div className="review-title">Customer Reviews</div>
      {reviews.map((review, i) => (
        <div key={i} style={{margin: "10px 0 18px 0", paddingBottom: 6, borderBottom: "1px solid #e9e5ee0d"}}>
          <span style={{
            fontWeight: 600,
            color: "var(--luxury-primary)",
            fontFamily: "var(--font-secondary)",
            fontSize: "1rem",
          }}>{'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}</span>
          <div className="review-placeholder" style={{marginTop: 0, color: "#6C3483"}}>{review.content}</div>
          <span style={{ color: "var(--luxury-secondary)", fontSize: "0.98rem" }}>– {review.user}</span>
        </div>
      ))}
    </section>
  );
}

// PUBLIC_INTERFACE
function Footer() {
  /** Elegant luxury-themed footer */
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
            <h1 className="title">
              Luxe Purple Cosmetics
            </h1>
            <div className="description">
              Experience luxury and beauty redefined. Explore our world-class collection of high-end cosmetics and skincare, curated for those who demand exclusivity and sophistication.
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
