import { Link } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
    display: "flex",
    gap: "20px",
    padding: "15px 20px",
    background: "#222",
    color: "#fff",
    alignItems: "center",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <nav style={navStyle}>
      <div style={{ marginRight: "auto", fontSize: "1.2rem" }}>🛍️ MyShop</div>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/shop" style={linkStyle}>
        Shop
      </Link>
      <Link to="/cart" style={linkStyle}>
        Cart
      </Link>
    </nav>
  );
}
