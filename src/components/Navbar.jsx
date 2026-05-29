import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart(); // Destructure totalItems from context

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

  const badgeStyle = {
    background: "#ff4757",
    color: "white",
    borderRadius: "50%",
    padding: "2px 8px",
    fontSize: "0.85rem",
    marginLeft: "5px",
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
        {/* Only show the badge if there are actually items in the cart*/}
        {totalItems > 0 && <span style={badgeStyle}>{totalItems}</span>}
      </Link>
    </nav>
  );
}
