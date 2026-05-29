import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart();

  // Inline Styles
  const containerStyle = {
    fontFamily: "system-ui, sans-serif",
    padding: "40px 20px",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const thStyle = {
    borderBottom: "2px solid #ddd",
    padding: "12px",
    textAlign: "left",
    background: "#f9f9f9",
  };

  const tdStyle = {
    borderBottom: "1px solid #eee",
    padding: "15px 12px",
    verticalAlign: "middle",
  };

  const btnStyle = {
    background: "#f0f0f0",
    border: "1px solid #ccc",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "4px",
    fontSize: "1rem",
  };

  const removeBtnStyle = {
    background: "#ff4757",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const summaryStyle = {
    marginTop: "30px",
    borderTop: "2px solid #ddd",
    paddingTop: "20px",
    textAlign: "right",
  };

  // Empty state handling
  if (cart.length === 0) {
    return (
      <div style={{ ...containerStyle, textAlign: "center" }}>
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link
          to="/shop"
          style={{
            display: "inline-block",
            marginTop: "15px",
            color: "#0070f3",
            fontWeight: "bold",
          }}
        >
          ➔ Go back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1>Your Shopping Cart</h1>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Product</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Quantity</th>
            <th style={thStyle}>Total</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              {/* Product Info */}
              <td style={tdStyle}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                  <span style={{ fontWeight: "50px" }}>{item.title}</span>
                </div>
              </td>

              {/* Individual Price */}
              <td style={tdStyle}>${item.price.toFixed(2)}</td>

              {/* Quantity Selector*/}
              <td style={tdStyle}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    style={btnStyle}
                  >
                    -
                  </button>
                  <span
                    style={{
                      minWidth: "20px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    style={btnStyle}
                  >
                    +
                  </button>
                </div>
              </td>

              {/* Row Total (Price * Quantity) */}
              <td style={tdStyle}>
                ${(item.price * item.quantity).toFixed(2)}
              </td>

              {/* Delete Button */}
              <td style={tdStyle}>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={removeBtnStyle}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Cart Summary Panel */}
      <div style={summaryStyle}>
        <h2 style={{ margin: "0 0 10px 0" }}>
          Total: ${totalPrice.toFixed(2)}
        </h2>
        <p style={{ color: "#666", fontSize: "0.9rem" }}>
          Taxes and shipping calculated at checkout.
        </p>
        <button
          onClick={() =>
            alert("Checkout system is mock only! Thanks for testing.")
          }
          style={{
            background: "#2ed573",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "6px",
            curosr: "pointer",
            fontSize: "1.1rem",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
