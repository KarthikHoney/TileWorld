import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider } from './components/CartContext'; // Adjust import as per your project
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Catalog from './components/Catalog';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import OrderConfirmation from './components/OrderConformation';

function App() {
  return (
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
          </Routes>
          <Footer/>
        </Router>
      </CartProvider>
  );
}

export default App;
