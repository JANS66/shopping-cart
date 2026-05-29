import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/* Navbar stays up top and visible on every single page */}
        <Navbar />
        {/* The main content area changes depending on the URL */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  );
}
