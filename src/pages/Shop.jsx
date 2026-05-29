import { useState } from "react";

// Mock product data with placeholders for images
const PRODUCTS = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Minimalist Watch",
    price: 125.0,
    image:
      "https://images.unsplash.com/photo-1689287428096-7e1dcc705a5c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbGlzdCUyMHdhdGNofGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Leather Backpack",
    price: 75.5,
    image:
      "https://images.unsplash.com/photo-1577733975197-3b950ca5cabe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TGVhdGhlciUyMEJhY2twYWNrfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    title: "Mechanical Keyboard",
    price: 110.0,
    image:
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8fDB8fHww",
  },
];

export default function Shop() {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "25px",
    padding: "20px",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Our Collection
      </h1>
      <div style={gridStyle}>
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// Sub component for individual items to isolate quantity state per card
function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);

  // Handle manual typing in the input field
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) {
      setQuantity(1); // Default back to 1 if input is cleared or negative
    } else {
      setQuantity(value);
    }
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    alert(`Added ${quantity}x "${product.title}" to cart!`);
    // Global context tracking will handle this action later
  };

  // Styles
  const cardStyle = {
    border: "1px solid #e0e0e0",
    borderRadius: " 10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const quantityContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    margin: "15px 0",
  };

  const btnStyle = {
    background: "#f0f0f0",
    border: "1px solid #ccc",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "1rem",
    borderRadius: "4px",
  };

  const inputStyle = {
    width: "50px",
    textAlign: "center",
    padding: "5px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const addCartBtnStyle = {
    background: "#0070f3",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    width: "100%",
    marginTop: "10px",
  };

  return (
    <div style={cardStyle}>
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />
      <h3 style={{ margin: "10px 0 5px 0", fontSize: "1.1rem" }}>
        {product.title}
      </h3>
      <p style={{ color: "#666", fontWeight: "bold", margin: "0" }}>
        ${product.price.toFixed(2)}
      </p>

      {/* Quantity adjustment cluster */}
      <div style={quantityContainerStyle}>
        <button onClick={handleDecrement} style={btnStyle}>
          -
        </button>
        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          min="1"
          style={inputStyle}
        />
        <button onClick={handleIncrement} style={btnStyle}>
          +
        </button>
      </div>

      <button onClick={handleAddToCart} style={addCartBtnStyle}>
        Add To Cart
      </button>
    </div>
  );
}
