import { Link } from "react-router-dom";

export default function Home() {
  // Simple inline styles to keep it clean and readable
  const containerStyle = {
    fontFamily: "system-ui, sans-serif",
    color: "#333",
    lineHeight: "1.6",
  };

  const heroStyle = {
    background:
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1766934587163-186d20bf3d40?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QSUyMG1vZGVybiUyQyUyMG1pbmltYWxpc3QlMjByZXRhaWwlMjBzdG9yZSUyMHN0b3JlZnJvbnQlMjBpbnRlcmlvciUyMHdpdGglMjBjbGVhbiUyMGxpbmVzJTIwYW5kJTIwd2FybSUyQyUyMGludml0aW5nJTIwYW1iaWVudCUyMGxpZ2h0aW5nfGVufDB8fDB8fHww")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    padding: "100px 20px",
    textAlign: "center",
  };

  const btnStyle = {
    display: "inline-block",
    background: "#ff4757",
    color: "#fff",
    padding: "12px 24px",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "5px",
    marginTop: "20px",
    transition: "background 0.2s",
  };

  const sectionStyle = {
    padding: "60px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    marginTop: "30px",
  };

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
  };

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <header style={heroStyle}>
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
          Your One-Stop Shop
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          Discover incredible deals on premium quality goods.
        </p>
        <Link to="/shop" style={btnStyle}>
          Start Shopping ➔
        </Link>
      </header>

      {/* Info / Value Proposition Section */}
      <section style={sectionStyle}>
        <h2>Why Shop With Us?</h2>
        <div style={gridStyle}>
          <div style={cardStyle}>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Deals"
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h3>Great Prices</h3>
              <p>
                We work directly with manufacturers to bring you the highest
                quality at the lowest cost.
              </p>
            </div>
          </div>

          <div style={cardStyle}>
            <img
              src="https://images.unsplash.com/photo-1613690399151-65ea69478674?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shipping"
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h3>Fast Delivery</h3>
              <p>
                Free standard shipping on all orders over €50. Tracked straight
                to your doorstep.
              </p>
            </div>
          </div>

          <div style={cardStyle}>
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Support"
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h3>24/7 Support</h3>
              <p>
                Our dedicated customer success team is here to help you around
                the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer
        style={{
          background: "#f5f5f5",
          textAlign: "center",
          padding: "20px",
          borderTop: "1px solid #eee",
        }}
      >
        <p>© {new Date().getFullYear()} MyShop Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
